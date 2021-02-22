var funName = new Function(
  "return function () {return {foo: function foo() {return('foo called');},}}"
)();
funName()["foo"]();


/*Expected Output
{ '(test21.js:1:15:3:2)': [ 'Function (Native)' ],
  '(test21.js:1:15:3:4)':
   [ '(evalIndirect(test21.js:1:15:3:2):1:2:1:91)' ],
  '(test21.js:4:1:4:10)':
   [ '(evalIndirect(test21.js:1:15:3:2):1:22:1:89)' ],
  '(test21.js:4:1:4:19)':
   [ '(evalIndirect(test21.js:1:15:3:2):1:48:1:86)' ] }
*/