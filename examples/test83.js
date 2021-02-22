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
{ '(test83.js:1:1:16:5)':
   [ '(test83.js:1:2:16:2)' ],
  '(test83.js:15:3:15:19)':
   [ '(test83.js:3:26:7:6)' ] }
*/