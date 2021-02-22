var funName = new Function(
  "return function () {return {foo: function foo() {return('foo called');},}}"
)();
funName()["foo"]();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test21.js:1:15:3:2)': [ 'Function (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test21.js:1:15:3:4)':
   [ '(evalIndirect(/home/XYZ/research/DynCallGraphJS/examples/test21.js:1:15:3:2):1:2:1:91)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test21.js:4:1:4:10)':
   [ '(evalIndirect(/home/XYZ/research/DynCallGraphJS/examples/test21.js:1:15:3:2):1:22:1:89)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test21.js:4:1:4:19)':
   [ '(evalIndirect(/home/XYZ/research/DynCallGraphJS/examples/test21.js:1:15:3:2):1:48:1:86)' ] }
*/