var x = new Function("return new Function(\"return 3\");")();
x();

/*Expected DCG Output
{ '(test77.js:1:9:1:59)': [ 'Function (Native)' ],
  '(test77.js:1:9:1:61)':
   [ '(evalIndirect(test77.js:1:9:1:59):1:2:1:49)' ],
  '(evalIndirect(test77.js:1:9:1:59):1:22:1:46)': [ 'Function (Native)' ],
  '(test77.js:2:1:2:4)':
   [ '(evalIndirect(evalIndirect(test77.js:1:9:1:59):1:22:1:46):1:2:1:25)' ] }
*/

/*Expected DCG2 Output
{ 'global (test77.js:1:9:1:59)':
   [ 'Function (Native)(test77.js:1:9:1:59)' ],
  'global (test77.js:1:9:1:61)':
   [ 'anon (evalIndirect(test77.js:1:9:1:59):1:2:1:49)' ],
  'anon (evalIndirect(test77.js:1:9:1:59):1:22:1:46)':
   [ 'Function (Native)(evalIndirect(test77.js:1:9:1:59):1:22:1:46)' ],
  'global (test77.js:2:1:2:4)':
   [ 'anon (evalIndirect(evalIndirect(test77.js:1:9:1:59):1:22:1:46):1:2:1:25)' ] }
*/