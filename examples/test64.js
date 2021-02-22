(function () {
  function foo() {
    var x = function () {};
    var y = function () {
      x();
    };
    return y;
  }
  foo()();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test64.js:1:1:10:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test64.js:1:2:10:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test64.js:9:3:9:8)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test64.js:2:3:8:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test64.js:9:3:9:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test64.js:4:13:6:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test64.js:5:7:5:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test64.js:3:13:3:27)' ] }
*/