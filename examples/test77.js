var x = new Function("return new Function(\"return 3\");")();
x();

/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test77.js:1:9:1:59)': [ 'Function (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test77.js:1:9:1:61)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test77.js:1:9:1:59):1:2:1:49)' ],
  '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test77.js:1:9:1:59):1:22:1:46)': [ 'Function (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test77.js:2:1:2:4)':
   [ '(evalIndirect(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test77.js:1:9:1:59):1:22:1:46):1:2:1:25)' ] }
*/