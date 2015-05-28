/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$, ...),
                (where `...` denotes the (optional) additional arguments the user passed to `parser.parse(str, ...)`)
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),
        stateStackSize: function(),

        options: { ... },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (array describing the set of expected tokens; may be empty when we cannot easily produce such a set)
    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule available for this particular error)
  }
  
  You can specify parser options by setting / modifying the `.yy` object of your Parser instance.
  These options are available:
  
  ### options which are global for all parser instances
  
  Parser.pre_parse: function(yy)
                              optional: you can specify a pre_parse() function in the chunk following the grammar, 
                              i.e. after the last `%%`.
  Parser.post_parse: function(yy, retval) { return retval; }
                              optional: you can specify a post_parse() function in the chunk following the grammar, 
                              i.e. after the last `%%`. When it does not return any value, the parser will return 
                              the original `retval`.
  
  ### options which can be set up per parser instance
  
  yy: {
      pre_parse:  function(yy)
                              optional: is invoked before the parse cycle starts (and before the first invocation 
                              of `lex()`) but immediately after the invocation of parser.pre_parse()).
      post_parse: function(yy, retval) { return retval; }
                              optional: is invoked when the parse terminates due to success ('accept') or failure 
                              (even when exceptions are thrown).  `retval` contains the return value to be produced
                              by `Parser.parse()`; this function can override the return value by returning another. 
                              When it does not return any value, the parser will return the original `retval`. 
                              This function is invoked immediately before `Parser.post_parse()`.
      parseError: function(str, hash)
                              optional: overrides the default `parseError` function.
  }
  
  parser.lexer.options: {
      ranges: boolean         optional: true ==> token location info will include a .range[] member.
      flex: boolean           optional: true ==> flex-like lexing behaviour where the rules are tested
                                                 exhaustively to find the longest match.
      backtrack_lexer: boolean
                              optional: true ==> lexer regexes are tested in order and for each matching
                                                 regex the action code is invoked; the lexer terminates
                                                 the scan when a token is returned by the action code.
      pre_lex:  function()
                              optional: is invoked before the lexer is invoked to produce another token.
                              `this` refers to the Lexer object.
      post_lex: function(token) { return token; }
                              optional: is invoked when the lexer has produced a token `token`;
                              this function can override the returned token value by returning another.
                              When it does not return any (truthy) value, the lexer will return the original `token`.
                              `this` refers to the Lexer object.
  }
*/
var calculator = (function(){
var __expand__ = function (k, v, o) {
  o = o || {};
  for (var l = k.length; l--; ) {
    o[k[l]] = v;
  }
  return o;
},
    $V0=[5,6,7,8,9,10,11,12],
    $V1=[5,6,7],
    $V2=[5,6,7,8,9];
var parser = {trace: function trace() { },
yy: {},
symbols_: {
  "error": 2,
  "expressions": 3,
  "e": 4,
  "EOF": 5,
  "+": 6,
  "-": 7,
  "*": 8,
  "/": 9,
  "^": 10,
  "!": 11,
  "%": 12,
  "(": 13,
  ")": 14,
  "NUMBER": 15,
  "E": 16,
  "PI": 17,
  "$accept": 0,
  "$end": 1
},
terminals_: {
  2: "error",
  5: "EOF",
  6: "+",
  7: "-",
  8: "*",
  9: "/",
  10: "^",
  11: "!",
  12: "%",
  13: "(",
  14: ")",
  15: "NUMBER",
  16: "E",
  17: "PI"
},
productions_: [
  0,
  [
    3,
    2
  ],
  [
    4,
    3
  ],
  [
    4,
    3
  ],
  [
    4,
    3
  ],
  [
    4,
    3
  ],
  [
    4,
    3
  ],
  [
    4,
    2
  ],
  [
    4,
    2
  ],
  [
    4,
    2
  ],
  [
    4,
    3
  ],
  [
    4,
    1
  ],
  [
    4,
    1
  ],
  [
    4,
    1
  ]
],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1 : 
/*! Production::     expressions : e EOF */
  typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1];  
break;
case 2 : 
/*! Production::     e : e + e */
 this.$ = $$[$0-2]+$$[$0]; 
break;
case 3 : 
/*! Production::     e : e - e */
 this.$ = $$[$0-2]-$$[$0]; 
break;
case 4 : 
/*! Production::     e : e * e */
 this.$ = $$[$0-2]*$$[$0]; 
break;
case 5 : 
/*! Production::     e : e / e */
 this.$ = $$[$0-2]/$$[$0]; 
break;
case 6 : 
/*! Production::     e : e ^ e */
 this.$ = Math.pow($$[$0-2], $$[$0]); 
break;
case 7 : 
/*! Production::     e : e ! */
 
          this.$ = (function fact (n) { return n == 0 ? 1 : fact(n-1) * n; })($$[$0-1]);
         
break;
case 8 : 
/*! Production::     e : e % */
 this.$ = $$[$0-1]/100; 
break;
case 9 : 
/*! Production::     e : - e */
 this.$ = -$$[$0]; 
break;
case 10 : 
/*! Production::     e : ( e ) */
 this.$ = $$[$0-1]; 
break;
case 11 : 
/*! Production::     e : NUMBER */
 this.$ = Number(yytext); 
break;
case 12 : 
/*! Production::     e : E */
 this.$ = Math.E; 
break;
case 13 : 
/*! Production::     e : PI */
 this.$ = Math.PI; 
break;
}
},
table: [
  {
    3: 1,
    4: 2,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    1: [
      3
    ]
  },
  {
    5: [
      1,
      8
    ],
    6: [
      1,
      9
    ],
    7: [
      1,
      10
    ],
    8: [
      1,
      11
    ],
    9: [
      1,
      12
    ],
    10: [
      1,
      13
    ],
    11: [
      1,
      14
    ],
    12: [
      1,
      15
    ]
  },
  {
    4: 16,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    4: 17,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  __expand__($V0, [
      2,
      11
    ], {14:[
      2,
      11
    ]
  }),
  __expand__($V0, [
      2,
      12
    ], {14:[
      2,
      12
    ]
  }),
  __expand__($V0, [
      2,
      13
    ], {14:[
      2,
      13
    ]
  }),
  {
    1: [
      2,
      1
    ]
  },
  {
    4: 18,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    4: 19,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    4: 20,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    4: 21,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  {
    4: 22,
    7: [
      1,
      3
    ],
    13: [
      1,
      4
    ],
    15: [
      1,
      5
    ],
    16: [
      1,
      6
    ],
    17: [
      1,
      7
    ]
  },
  __expand__($V0, [
      2,
      7
    ], {14:[
      2,
      7
    ]
  }),
  __expand__($V0, [
      2,
      8
    ], {14:[
      2,
      8
    ]
  }),
  __expand__($V0, [
      2,
      9
    ], {14:[
      2,
      9
    ]
  }),
  {
    6: [
      1,
      9
    ],
    7: [
      1,
      10
    ],
    8: [
      1,
      11
    ],
    9: [
      1,
      12
    ],
    10: [
      1,
      13
    ],
    11: [
      1,
      14
    ],
    12: [
      1,
      15
    ],
    14: [
      1,
      23
    ]
  },
  __expand__($V1, [
      2,
      2
    ], {8:[
      1,
      11
    ],9:[
      1,
      12
    ],10:[
      1,
      13
    ],11:[
      1,
      14
    ],12:[
      1,
      15
    ],14:[
      2,
      2
    ]
  }),
  __expand__($V1, [
      2,
      3
    ], {8:[
      1,
      11
    ],9:[
      1,
      12
    ],10:[
      1,
      13
    ],11:[
      1,
      14
    ],12:[
      1,
      15
    ],14:[
      2,
      3
    ]
  }),
  __expand__($V2, [
      2,
      4
    ], {10:[
      1,
      13
    ],11:[
      1,
      14
    ],12:[
      1,
      15
    ],14:[
      2,
      4
    ]
  }),
  __expand__($V2, [
      2,
      5
    ], {10:[
      1,
      13
    ],11:[
      1,
      14
    ],12:[
      1,
      15
    ],14:[
      2,
      5
    ]
  }),
  __expand__([5,6,7,8,9,10], [
      2,
      6
    ], {11:[
      1,
      14
    ],12:[
      1,
      15
    ],14:[
      2,
      6
    ]
  }),
  __expand__($V0, [
      2,
      10
    ], {14:[
      2,
      10
    ]
  })
],
defaultActions: {
  8: [
    2,
    1
  ]
},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer;
    if (this.__lexer__) {
        lexer = this.__lexer__;
    } else {
        lexer = this.__lexer__ = Object.create(this.lexer);
    }

    var sharedState = { 
      yy: {} 
    };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc === 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError; // because in the generated code 'this.__proto__.parseError' doesn't work for everyone: http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/
    }

    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol;
    var preErrorSymbol = null;
    var state, action, a, r;
    var yyval = {};
    var p, len, newState;
    var expected = [];
    var retval = false;

    if (this.pre_parse) {
        this.pre_parse.call(this, sharedState.yy);
    }
    if (sharedState.yy.pre_parse) {
        sharedState.yy.pre_parse.call(this, sharedState.yy);
    }

    try {
        for (;;) {
            // retrieve state number from top of stack
            state = stack[stack.length - 1];

            // use default actions if available
            if (this.defaultActions[state]) {
                action = this.defaultActions[state];
            } else {
                if (symbol === null || typeof symbol === 'undefined') {
                    symbol = lex();
                }
                // read action for current state and first input
                action = table[state] && table[state][symbol];
            }

            // handle parse error
            if (typeof action === 'undefined' || !action.length || !action[0]) {
                var error_rule_depth;
                var errStr = '';

                // Return the rule stack depth where the nearest error rule can be found.
                // Return FALSE when no error recovery rule was found.
                function locateNearestErrorRecoveryRule(state) {
                    var stack_probe = stack.length - 1;
                    var depth = 0;

                    // try to recover from error
                    for (;;) {
                        // check for error recovery rule in this state
                        if ((TERROR.toString()) in table[state]) {
                            return depth;
                        }
                        if (state === 0 || stack_probe < 2) {
                            return false; // No suitable error recovery rule available.
                        }
                        stack_probe -= 2; // popStack(1): [symbol, action]
                        state = stack[stack_probe];
                        ++depth;
                    }
                }

                if (!recovering) {
                    // first see if there's any chance at hitting an error recovery rule:
                    error_rule_depth = locateNearestErrorRecoveryRule(state);

                    // Report error
                    expected = [];
                    for (p in table[state]) {
                        if (this.terminals_[p] && p > TERROR) {
                            expected.push("'" + this.terminals_[p] + "'");
                        }
                    }
                    if (lexer.showPosition) {
                        errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                    } else {
                        errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                 (symbol == EOF ? "end of input" :
                                  ("'" + (this.terminals_[symbol] || symbol) + "'"));
                    }
                    a = this.parseError(errStr, p = {
                        text: lexer.match,
                        token: this.terminals_[symbol] || symbol,
                        line: lexer.yylineno,
                        loc: yyloc,
                        expected: expected,
                        recoverable: (error_rule_depth !== false)
                    });
                    if (!p.recoverable) {
                        retval = a;
                        break;
                    }
                } else if (preErrorSymbol !== EOF) {
                    error_rule_depth = locateNearestErrorRecoveryRule(state);
                }

                // just recovered from another error
                if (recovering == 3) {
                    if (symbol === EOF || preErrorSymbol === EOF) {
                        retval = this.parseError(errStr || 'Parsing halted while starting to recover from another error.', {
                            text: lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: lexer.yylineno,
                            loc: yyloc,
                            expected: expected,
                            recoverable: false
                        });
                        break;
                    }

                    // discard current lookahead and grab another
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    symbol = lex();
                }

                // try to recover from error
                if (error_rule_depth === false) {
                    retval = this.parseError(errStr || 'Parsing halted. No suitable error recovery rule available.', {
                        text: lexer.match,
                        token: this.terminals_[symbol] || symbol,
                        line: lexer.yylineno,
                        loc: yyloc,
                        expected: expected,
                        recoverable: false
                    });
                    break;
                }
                popStack(error_rule_depth);

                preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
                symbol = TERROR;         // insert generic error symbol as new lookahead
                state = stack[stack.length - 1];
                action = table[state] && table[state][TERROR];
                recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
            }

            // this shouldn't happen, unless resolve defaults are off
            if (action[0] instanceof Array && action.length > 1) {
                retval = this.parseError('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: false
                });
                break;
            }

            switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution / no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                continue;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length - (len || 1)].first_line,
                    last_line: lstack[lstack.length - 1].last_line,
                    first_column: lstack[lstack.length - (len || 1)].first_column,
                    last_column: lstack[lstack.length - 1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    retval = r;
                    break;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                stack.push(newState);
                continue;

            case 3:
                // accept
                retval = true;
                break;
            }

            // break out of loop: we accept or fail with error
            break;
        }
    } finally {
        var rv;

        if (sharedState.yy.post_parse) {
            rv = sharedState.yy.post_parse.call(this, sharedState.yy, retval);
            if (typeof rv !== 'undefined') retval = rv;
        }
        if (this.post_parse) {
            rv = this.post_parse.call(this, sharedState.yy, retval);
            if (typeof rv !== 'undefined') retval = rv;
        }
    }

    return retval;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function () {
var lexer = ({

EOF:1,

ERROR:2,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            return this.yy.parser.parseError(str, hash) || this.ERROR;
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this._signaled_error_token = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        // Count the linenumber up when we hit the LF (or a stand-alone CR).
        // On CRLF, the linenumber is incremented when you fetch the LF:
        // the CR is hence 'assigned' to the previous line.
        var lines = this._input.match(/^(?:\r[^\n]|\r$|\n)/);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - len);
        this.matched = this.matched.substr(0, this.matched.length - len);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                + oldLines[oldLines.length - lines.length].length - lines[0].length :
                this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            // when the parseError() call returns, we MUST ensure that the error is registered.
            // We accomplish this by signaling an 'error' token to be produced for the current
            // .lex() run.
            this._signaled_error_token = (this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: this.match,
                token: null,
                line: this.yylineno,
                loc: this.yyloc
            }) || this.ERROR);
        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// return (part of the) already matched input, i.e. for error messages
pastInput:function (maxSize) {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        if (maxSize < 0)
            maxSize = past.length;
        else if (!maxSize)
            maxSize = 20;
        return (past.length > maxSize ? '...' + past.substr(-maxSize) : past);
    },

// return (part of the) upcoming input, i.e. for error messages
upcomingInput:function (maxSize) {
        var next = this.match;
        if (maxSize < 0)
            maxSize = next.length + this._input.length;
        else if (!maxSize)
            maxSize = 20;
        if (next.length < maxSize) {
            next += this._input.substr(0, maxSize - next.length);
        }
        return (next.length > maxSize ? next.substr(0, maxSize) + '...' : next);
    },

// return a string which displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput().replace(/\s/g, ' ');
        var c = new Array(pre.length + 1).join('-');
        return pre + this.upcomingInput().replace(/\s/g, ' ') + '\n' + c + '^';
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset + this.yyleng];
        }
        this.offset += this.yyleng;
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        } else if (this._signaled_error_token) {
            // produce one 'error' token as .parseError() in reject() did not guarantee a failure signal by throwing an exception!
            token = this._signaled_error_token;
            this._signaled_error_token = false;
            return token;
        }
        return false;
    },

// return next match in input
next:function () {
        function clear() {
            this.yytext = '';
            this.yyleng = 0;
            this.match = '';
            this.matches = false;
            this._more = false;
            this._backtrack = false;
        }

        if (this.done) {
            clear.call(this);
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            clear.call(this);
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === '') {
            clear.call(this);
            this.done = true;
            return this.EOF;
        } else {
            token = this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: this.match + this._input,
                token: null,
                line: this.yylineno,
                loc: this.yyloc
            }) || this.ERROR;
            if (token === this.ERROR) {
                // we can try to recover from a lexer error that parseError() did not 'recover' for us, by moving forward one character at a time:
                if (!this.match.length) {
                    this.input();
                }
            }
            return token;
        }
    },

// return next match that has a token
lex:function lex() {
        var r;
        // allow the PRE/POST handlers set/modify the return token for maximum flexibility of the generated lexer:
        if (typeof this.options.pre_lex === 'function') {
            r = this.options.pre_lex.call(this);
        }
        while (!r) {
            r = this.next();
        }
        if (typeof this.options.post_lex === 'function') {
            // (also account for a userdef function which does not return any value: keep the token as is)
            r = this.options.post_lex.call(this, r) || r;
        }
        return r;
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions['INITIAL'].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return 'INITIAL';
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

var YYSTATE = YY_START;
switch($avoiding_name_collisions) {
case 0 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \s+ */ 
 /* skip whitespace */ 
break;
case 1 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       [0-9]+(\.[0-9]+)?\b */ 
 return 15; 
break;
case 2 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \* */ 
 return 8; 
break;
case 3 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \/ */ 
 return 9; 
break;
case 4 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       - */ 
 return 7; 
break;
case 5 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \+ */ 
 return 6; 
break;
case 6 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \^ */ 
 return 10; 
break;
case 7 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       ! */ 
 return 11; 
break;
case 8 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       % */ 
 return 12; 
break;
case 9 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \( */ 
 return 13; 
break;
case 10 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       \) */ 
 return 14; 
break;
case 11 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       PI */ 
 return 17; 
break;
case 12 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       E */ 
 return 16; 
break;
case 13 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       $ */ 
 return 5; 
break;
case 14 : 
/*! Conditions:: INITIAL */ 
/*! Rule::       . */ 
 return 'INVALID'; 
break;
default:
  return this.simpleCaseActionClusters[$avoiding_name_collisions];
}
},
simpleCaseActionClusters: {

},
rules: [
/^(?:\s+)/,
/^(?:[0-9]+(\.[0-9]+)?\b)/,
/^(?:\*)/,
/^(?:\/)/,
/^(?:-)/,
/^(?:\+)/,
/^(?:\^)/,
/^(?:!)/,
/^(?:%)/,
/^(?:\()/,
/^(?:\))/,
/^(?:PI)/,
/^(?:E)/,
/^(?:$)/,
/^(?:.)/
],
conditions: {
  "INITIAL": {
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "inclusive": true
  }
}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.Parser = calculator.Parser;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); };
}