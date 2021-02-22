(function () {
  function foo() {
    return [function () {}, function () {}];
  }
  var qoute = foo();
  qoute[0]();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test92.js:1:1:7:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test92.js:1:2:7:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test92.js:5:15:5:20)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test92.js:2:3:4:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test92.js:6:3:6:13)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test92.js:3:13:3:27)' ] }
*/