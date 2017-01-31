#! /bin/bash
#


#
# check if important files exist; if not, abort mission!
# Prevent major boo-boo's which only pollute our git repo!
# 
are_we_okay() {
	if ! file_exists lib/util/ebnf-parser.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/ebnf-transform.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/lex-parser.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/parser.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/regexp-lexer.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/set.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/transform-parser.js ; then
		return 1;  # fail
	fi
	if ! file_exists lib/util/typal.js ; then
		return 1;  # fail
	fi
	return 0; 	 # ok!
} 

file_exists() {
	if test -n "$1" && test -f "$1"; then
		return 0;  // ok 
	else
		return 1;  # fail
	fi
}


# ---------------------------------------------------------------------------




pushd $(dirname $0)                                                                                     2> /dev/null  > /dev/null


# to emulate GOTO: we run a loop and BREAK out of it:
while true; do


# ---------------------------------------------------------------------------
# stage 1: rebuild all libraries from scratch, using existing NPM packages.
#          Commit. (`npm install` fails often enough that we invoke the bastard TWICE!)
# ---------------------------------------------------------------------------

if ! 		make superclean 			; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make site 						; then break; fi; 			# GOTO END on failure


if ! are_we_okay ; then break; fi; 			# GOTO END on failure


# git submodule foreach git commit -a -m 'rebuilt library files'
# ^-- one or more subrepo's may fail as there'ld be nothing to commit,
#     which would abort the `git submodule foreach` command!
pushd modules/ebnf-parser/                                                                                     2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison2json/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison-lex/                                                                                       2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/json2jison/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/lex-parser/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null

git commit -a -m 'rebuilt library files'
git push --all


if ! 		make superclean 			; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make site 						; then break; fi; 			# GOTO END on failure


if ! are_we_okay ; then break; fi; 			# GOTO END on failure


pushd modules/ebnf-parser/                                                                                     2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison2json/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison-lex/                                                                                       2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/json2jison/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/lex-parser/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null

git commit -a -m 'rebuilt library files'
git push --all


# ---------------------------------------------------------------------------
# stage 2: Tag and Publish.
# ---------------------------------------------------------------------------


if ! 		make git-tag    			; then break; fi; 			# GOTO END on failure

if ! are_we_okay ; then break; fi; 			# GOTO END on failure

if ! 		npm publish     			; then break; fi; 			# GOTO END on failure



# ---------------------------------------------------------------------------
# stage 3: Bump build revision for future work, commit & push.
# ---------------------------------------------------------------------------


if ! 		make bump 						; then break; fi; 			# GOTO END on failure


if ! are_we_okay ; then break; fi; 			# GOTO END on failure


# git submodule foreach git commit -a -m 'rebuilt library files'
# ^-- one or more subrepo's may fail as there'ld be nothing to commit,
#     which would abort the `git submodule foreach` command!
pushd modules/ebnf-parser/                                                                                     2> /dev/null  > /dev/null
git commit -a -m 'bumped build revision'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison2json/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'bumped build revision'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison-lex/                                                                                       2> /dev/null  > /dev/null
git commit -a -m 'bumped build revision'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/json2jison/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'bumped build revision'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/lex-parser/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'bumped build revision'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null

git commit -a -m 'bumped build revision'
git push --all


# ---------------------------------------------------------------------------
# stage 4: update NPM packages, if any; rebuild & commit
# ---------------------------------------------------------------------------


# rebuild everything before we go and tag the buggers!
#make git-tag
#make site

#../../../util/git_pull_push.sh -f

pushd modules/ebnf-parser/                                                                                     2> /dev/null  > /dev/null
ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison2json/                                                                                      2> /dev/null  > /dev/null
ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison-lex/                                                                                       2> /dev/null  > /dev/null
ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/json2jison/                                                                                      2> /dev/null  > /dev/null
ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/lex-parser/                                                                                      2> /dev/null  > /dev/null
ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null

ncu -a --packageFile package.json 
git commit -a -m 'updated NPM packages'
git push --all


if ! 		make superclean 			; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make prep 						; then break; fi; 			# GOTO END on failure
if ! 		make site 						; then break; fi; 			# GOTO END on failure


if ! are_we_okay ; then break; fi; 			# GOTO END on failure


pushd modules/ebnf-parser/                                                                                     2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison2json/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/jison-lex/                                                                                       2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/json2jison/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null
pushd modules/lex-parser/                                                                                      2> /dev/null  > /dev/null
git commit -a -m 'rebuilt library files'
git push --all
popd                                                                                                           2> /dev/null  > /dev/null

git commit -a -m 'rebuilt library files'
git push --all



echo "Done. You can now continue work on the new version:"
node lib/cli.js -V


# end of BREAK-as-emulation-of-GOTO loop:
break
done


popd                                                                                                    2> /dev/null  > /dev/null


