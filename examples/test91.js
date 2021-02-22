(function () {
  function foo() {
    return (function foo2() {
      return function foo3() {};
    })();
  }
  var bar = foo();
  bar();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test91.js:1:1:9:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test91.js:1:2:9:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test91.js:7:13:7:18)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test91.js:2:3:6:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test91.js:3:12:5:9)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test91.js:3:13:5:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test91.js:8:3:8:8)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test91.js:4:14:4:32)' ] }
*/