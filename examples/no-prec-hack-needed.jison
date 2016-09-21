
/* 
 * description: Parses and executes mathematical expressions. 
 * Self-contained example which runs a series of tests in a performance benchmark: 
 * see main() at the bottom 
 *
 * At the same time the grammar exhibits error recovery rules which cause 
 * conflicts, despite of which we get a working grammar (because we don't
 * worry when a conflict occurs where only error rules are involved...)

    $ ./lib/cli.js -c 0 --main examples/no-prec-hack-needed.jison
        Conflict in grammar: multiple actions possible when lookahead token is EOF in state 3
        - reduce by rule: v -> error
        - shift token (then go to state 17)
          (Resolved S/R conflict: shift by default.)
        Conflict in grammar: multiple actions possible when lookahead token is ) in state 27
        - reduce by rule: v -> error
        - shift token (then go to state 34)
          (Resolved S/R conflict: shift by default.)

        States with conflicts:

        State 3    (EOF @ v -> error .)

          expressions -> error .EOF              #lookaheads= [$end]
          v -> error .                           #lookaheads= [%]  [!]  [/]  [*]  [EOF]  [+]  [-]  [^]

        State 27    () @ v -> error .)

          u -> ( error .)                        #lookaheads= [^]  [-]  [+]  [EOF]  [*]  [/]  [!]  [%]  [)]
          v -> error .                           #lookaheads= [%]  [!]  [/]  [*]  [)]  [+]  [-]  [^]


        JISON output for module [noPrecHackNeeded] has been written to file: no-prec-hack-needed.js

    $ node no-prec-hack-needed.js
        Time: total:  4995ms , sample_count: 177 , # runs: 35400 , average: 0.1411ms , deviation: 2.96% , peak_de
        viation: 31.28%

    $ node -v
        v6.1.0

 */



/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
"*"                   return heavy('*');
"/"                   return heavy('/');
"-"                   return heavy('-');
"+"                   return heavy('+');
"^"                   return heavy('^');
"!"                   return heavy('!');
// `%`: the grammar is not LALR(1) unless we make the lexer smarter and have it disambiguate the `%` between `percent` and `modulo` functionality by additional look-ahead:
// we introduce a lexical predicate here to disambiguate the `%` and thus keep the grammar LALR(1)!
//      https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
"%"(?=\s*(?:[^0-9!]|E\b|PI\b|$))
                      // followed by another operator, i.e. anything that's not a number, or The End: then this is a unary `percent` operator.
                      // `1%-2` would be ambiguous but isn't: the `-` is considered as a unary minus and thus `%` is a `modulo` operator.
                      // `1%*5` thus is treated the same: any operator following the `%` is assumed to be a *binary* operator. Hence `1% times 5`
                      // which brings us to operators which only exist in unary form: `!`, and values which are not numbers, e.g. `PI` and `E`:
                      // how about 
                      // - `1%E` -> modulo E, 
                      // - `1%!0` -> modulo 1 (as !0 -> 1) 
                      //
                      // Of course, the easier way to handle this would be to keep the lexer itself dumb and put this additional logic inside
                      // a post_lex handler which should then be able to obtain additional look-ahead tokens and queue them for later, while
                      // using those to inspect and adjust the lexer output now -- a trick which is used in the cockroachDB SQL parser code, for example.
                      //
                      // The above regex solution however is a more local extra-lookahead solution and thus should cost us less overhead than
                      // the suggested post_lex alternative, but it comes at a cost itself: complex regex and duplication of language knowledge
                      // in the lexer itself, plus inclusion of *grammar* (syntactic) knowledge in the lexer too, where it doesn't belong in an ideal world...
                      console.log('percent: ', yytext);
                      return heavy('%');
"%"                   return heavy('MOD');
"("                   return heavy('(');
")"                   return heavy(')');
"PI"                  return heavy('PI');
"E"                   return heavy('E');
<<EOF>>               return heavy('EOF');
.                     return heavy('INVALID');


%% 

// just load the CPU for a while:
function heavy(s) {
    var flip = [s, s];
    for (var i = 0, len = 1000; i < len; i++) {
        flip[i % 2] = flip[(i + 1) % 2] + s;
    }
    return flip[0][flip[0].length - 1];
}

var original_lex_f = lexer.lex;

lexer.lex = function () {
    if (this._input && 01) {
        var match = this._input[0];
        switch (match) {
        case "*":
        case "/":
        case "-":
        case "+":
        case "^":
        case "!":
        case "%":
        case "(":
        case ")":
            //console.log('fast track for: ', match);

            //this.yylineno += lines.length;
            this.yylloc.first_column = this.yylloc.last_column;
            this.yylloc.last_column++;
            this.yytext += match;
            this.match += match;
            //this.matches = [match];
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range[1] = this.offset + this.yyleng;
            }
            this.offset++;
            this._more = false;
            this._backtrack = false;
            this._input = this._input.slice(1);
            this.matched += match;
            //token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input) {
                this.done = false;
            }
            return match;

        case "π":
            //this.yylineno += lines.length;
            this.yylloc.first_column = this.yylloc.last_column;
            this.yylloc.last_column++;
            this.yytext += match;
            this.match += match;
            //this.matches = [match];
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range[1] = this.offset + this.yyleng;
            }
            this.offset++;
            this._more = false;
            this._backtrack = false;
            this._input = this._input.slice(1);
            this.matched += match;
            //token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input) {
                this.done = false;
            }
            return 'PI';
        }
    }
    return original_lex_f.call(this);
};

/lex

/* operator associations and precedence */

%left '+' '-'
%left MOD '*' '/'
%right '^'                  // it really doesn't matter, but we ASSUME most expressions with chained power expressions, e.g. `10^3^2`, have the nearer-to-one(1) integer? values, which makes us guess it's slightly better, given the restrictions of floating point accuracy, to calculate the uppermost power part first, i.e. `3^2` instead of `10^3` in the given example.
%right '!'
%right '%'

%token INVALID

%start expressions

%% /* language grammar */



expressions
    : e EOF
        {
          print('### expression result:', $1);

          // No need to `return $1;`: the value is automatically carried to the outside
          // (UNLESS it is 'undefined', in which case the parser is assumed
          // to be a recognizer, but that is not the case here!)
          $$ = $1;
        }
    | error ERROR EOF
        {
            //print('~~~ (...) error: ', { '$1': $1, '#1': #1, yytext: yytext, '$$': $$, '@$': @$, token: parser.describeSymbol(#$), 'yystack': yystack, 'yyvstack': yyvstack, 'yylstack': yylstack, last_error: yy.lastErrorMessage});
            print('~~~', parser.describeSymbol(#$), ' error: ', { '$1': $1, yytext: yytext, '@$': @$, token: parser.describeSymbol(#$)}, yy.lastErrorMessage);
            yyerrok;
            yyclearin;
            $$ = 1;
        }
    ;

e
    : e '+' e
        {
            $$ = $1 + $3;
            print($1, $2, $3, '==>', $$);
        }
    | e '-' e
        {
            $$ = $1 - $3;
            print($1, $2, $3, '==>', $$);
        }
    | m
    ;

m
    : m MOD m
        {
            $$ = $1 % $3;
            print($1, $2, $3, '==>', $$);
        }
    | m '/' m
        {
            $$ = $1 / $3;
            print($1, $2, $3, '==>', $$);
        }
    | m '*' m
        {
            $$ = $1 * $3;
            print($1, $2, $3, '==>', $$);
        }
    | p
    ;

p
    : p '^' p
        {
            $$ = Math.pow($1, $3);
            print($1, $2, $3, '==>', $$);
        }
    | u
    ;

u
    :  u '!'                                    // 'factorial'
        {{
            $$ = (function fact(n) {
                return n == 0 ? 1 : fact(n - 1) * n;
            })($u);
            print($1, $2, '==>', $$);
        }}
    | '!' u                                     // 'not'
        {
            $$ = ($u ? 0 : 1);
            print($1, $2, '==>', $$);
        }
    | u '%'                                     // 'percent'
        {
            $$ = $u / 100;
            print($1, $2, '==>', $$);
        }
    | '-' u     // doesn't need the `%prec UMINUS` tweak as the grammar ruleset enforces the precedence implicitly
        {
            $$ = -$u;
            print($1, $2, '==>', $$);
        }
    | '+' u     // doesn't need the `%prec UMINUS` tweak as the grammar ruleset enforces the precedence implicitly
        {
            $$ = $u;
            print($1, $2, '==>', $$);
        }
    | '(' e ')'
        {
            $$ = $2;
            print($1, $2, $3, '==>', $$);
        }
    | v
    ;

v
    : NUMBER
        {
            $$ = Number(yytext);
            print($1, '==>', $$);
        }
    | E
        {
            $$ = Math.E;
            print($1, '==>', $$);
        }
    | PI
        {
            $$ = Math.PI;
            print($1, '==>', $$);
        }
    | error
        {
            //print('~~~ (...) error: ', { '$1': $1, '#1': #1, yytext: yytext, '$$': $$, '@$': @$, token: parser.describeSymbol(#$), 'yystack': yystack, 'yyvstack': yyvstack, 'yylstack': yylstack, last_error: yy.lastErrorMessage});
            print('~~~', parser.describeSymbol(#$), ' error: ', { '$1': $1, yytext: yytext, '@$': @$, token: parser.describeSymbol(#$)}, yy.lastErrorMessage);
            yyerrok;
            yyclearin;
            $$ = 1;
        }
    ;





// ----------------------------------------------------------------------------------------

%%

// feature of the GH fork: specify your own main.
//
// compile with
//
//      jison -o test.js --main that/will/be/me.jison
//
// then run
//
//      node ./test.js
//
// to see the output.

var assert = require("assert");


var print = (typeof console !== 'undefined' ? function __print__() {
    console.log.apply(null, ['  '].concat(Array.prototype.slice.call(arguments, 0)));
} : function __dummy__() {});










parser.pre_parse = function (yy) {
    print("parsing: ", yy.lexer.upcomingInput(-1 /* i.e. produce the entire (unparsed) input string */));

    parser.lexer.options.post_lex = function (token) {
        print("lex() ==> ", token, '[' + this.yytext + ']', parser.describeSymbol(token));
    };
};



//parser.trace = function () {
//    print.apply(null, ['TRACE: '].concat(Array.prototype.slice.call(arguments, 0)));
//};



parser.yy.parseError = function parseError(str, hash) {
    assert(hash.yy);
    assert(this.yy);
    assert(this.yy !== hash.yy);
    if (hash.recoverable) {
        this.trace(str);
        hash.yy.lastErrorMessage = str;
    } else {
        console.error(str, hash && hash.exception);
        throw new this.JisonParserError(str, hash);
    }
};



%include benchmark.js




parser.main = function () {
    print("Running benchmark...");
    var t1 = perf.start();

    var basenum = 1;

    function test() {
        const formulas_and_expectations =  [
            basenum + '+2*(3-5--+--+6!)-7/-8%',                      1523.5 + basenum,
            basenum + '+2*E%^PI^2+4+5',                              9 + basenum, /* this bets on JS floating point calculations discarding the small difference with this integer value... */
            basenum + '+(2+3*++++)+5+6+7+8+9 9',                     32 + basenum, // with error recovery and all it gives you a value...
            basenum + '+2*(3!-5!-6!)/7/8',                           -29.785714285714285 + basenum,
        ];

        basenum++;

        for (var i = 0, len = formulas_and_expectations.length; i < len; i += 2) {
            var formula = formulas_and_expectations[i];
            var expectation = formulas_and_expectations[i + 1];

            var rv = parser.parse(formula);
            print("'" + formula + "' ==> ", rv, "\n");
            assert.equal(rv, expectation);
        }
        return formulas_and_expectations.length / 2;
    }

    if (0) {
        print = function dummy() {};
    }
    if (01) {
        test();
    } else {
        bench(test);
    }
    
    // if you get past the assert(), you're good.
    print("tested OK @", r(perf.mark(), 2), " ms");
};

