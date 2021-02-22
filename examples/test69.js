(function () {
  function foo(x) {
    return x;
  }
  function bar() {
    return;
  }
  for (var i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      foo(i);
    } else {
      bar();
    }
  }
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test69.js:1:1:15:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test69.js:1:2:15:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test69.js:10:7:10:13)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test69.js:2:3:4:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test69.js:12:7:12:12)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test69.js:5:3:7:4)' ] }
*/