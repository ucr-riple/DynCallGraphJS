(function () {
  function foo() {
    foo = function () {
      return 3;
    };
    return 0;
  }
  foo();
  foo();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test63.js:1:1:10:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test63.js:1:2:10:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test63.js:8:3:8:8)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test63.js:2:3:7:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test63.js:9:3:9:8)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test63.js:3:11:5:6)' ] }
*/