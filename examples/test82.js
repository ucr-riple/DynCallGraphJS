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
{ '(test82.js:1:1:17:5)':
   [ '(test82.js:1:2:17:2)' ],
  '(test82.js:16:3:16:19)':
   [ '(test82.js:4:22:8:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test82.js:1:1:17:5)':
   [ 'anon (test82.js:1:2:17:2)' ],
  'anon (test82.js:16:3:16:19)':
   [ 'performanceNow (test82.js:4:22:8:6)' ] }
*/