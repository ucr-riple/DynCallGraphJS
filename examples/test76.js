var x = new Function('return "x"');
x();

/*Expected DCG Output
{ '(test76.js:1:9:1:35)': [ 'Function (Native)' ],
  '(test76.js:2:1:2:4)':
   [ '(evalIndirect(test76.js:1:9:1:35):1:2:1:27)' ] }
*/

/*Expected DCG2 Output
{ 'global (test76.js:1:9:1:35)':
   [ 'Function (Native)(test76.js:1:9:1:35)' ],
  'global (test76.js:2:1:2:4)':
   [ 'anon (evalIndirect(test76.js:1:9:1:35):1:2:1:27)' ] }
*/