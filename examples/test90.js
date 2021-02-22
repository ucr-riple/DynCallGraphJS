(function () {
  function foo() {
    return function bar() {};
  }
  var qoute = foo();
  qoute();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test90.js:1:1:7:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test90.js:1:2:7:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test90.js:5:15:5:20)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test90.js:2:3:4:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test90.js:6:3:6:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test90.js:3:12:3:29)' ] }
*/
