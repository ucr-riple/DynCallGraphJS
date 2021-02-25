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


/*Expected DCG Output
{ '(test83.js:1:1:16:5)':
   [ '(test83.js:1:2:16:2)' ],
  '(test83.js:15:3:15:19)':
   [ '(test83.js:3:26:7:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test83.js:1:1:16:5)':
   [ 'anon (test83.js:1:2:16:2)' ],
  'anon (test83.js:15:3:15:19)':
   [ 'performanceNow (test83.js:3:26:7:6)' ] }
*/