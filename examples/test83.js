(function () {
  if (true) {
    var performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  } else {
    var performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  }
  performanceNow();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test83.js:1:1:16:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test83.js:1:2:16:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test83.js:15:3:15:19)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test83.js:3:26:7:6)' ] }
*/