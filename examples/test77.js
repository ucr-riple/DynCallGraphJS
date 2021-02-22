var x = new Function("return new Function(\"return 3\");")();
x();

/*Expected Output
{ '(test77.js:1:9:1:59)': [ 'Function (Native)' ],
  '(test77.js:1:9:1:61)':
   [ '(evalIndirect(test77.js:1:9:1:59):1:2:1:49)' ],
  '(evalIndirect(test77.js:1:9:1:59):1:22:1:46)': [ 'Function (Native)' ],
  '(test77.js:2:1:2:4)':
   [ '(evalIndirect(evalIndirect(test77.js:1:9:1:59):1:22:1:46):1:2:1:25)' ] }
*/