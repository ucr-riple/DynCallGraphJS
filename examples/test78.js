eval("var bar =  new Function(\"return 10\"); bar();")

/*Expected DCG Output
{ '(eval(test78.js:1:6:1:54):1:12:1:37)': [ 'Function (Native)' ],
  '(eval(test78.js:1:6:1:54):1:39:1:44)':
   [ '(evalIndirect(eval(test78.js:1:6:1:54):1:12:1:37):1:2:1:26)' ] }
*/

/*Expected DCG2 Output
{ 'global (eval(test78.js:1:6:1:54):1:12:1:37)':
   [ 'Function (Native)(eval(test78.js:1:6:1:54):1:12:1:37)' ],
  'global (eval(test78.js:1:6:1:54):1:39:1:44)':
   [ 'anon (evalIndirect(eval(test78.js:1:6:1:54):1:12:1:37):1:2:1:26)' ] }
*/