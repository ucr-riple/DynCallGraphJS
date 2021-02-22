(function () {
  function main() {
    (function () {
      var x = function () {
        return 0;
      };
      var y = function () {
        return x();
      };
      y();
    })();
  }
  main();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:1:1:14:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:1:2:14:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test65.js:13:3:13:9)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:2:3:12:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test65.js:3:5:11:9)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:3:6:11:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test65.js:10:7:10:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:7:15:9:8)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test65.js:8:16:8:19)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test65.js:4:15:6:8)' ] }
*/