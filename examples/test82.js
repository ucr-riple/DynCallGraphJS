(function () {
  var performanceNow;
  if (true) {
    performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  } else {
    performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  }
  performanceNow();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test82.js:1:1:17:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test82.js:1:2:17:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test82.js:16:3:16:19)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test82.js:4:22:8:6)' ] }
*/