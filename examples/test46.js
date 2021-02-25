(function () {
  var x = function () {
    return 0;
  };
  var y = function () {
    return x();
  };
  y();
})();


/*Expected DCG Output
{ '(test46.js:1:1:9:5)':
   [ '(test46.js:1:2:9:2)' ],
  '(test46.js:8:3:8:6)':
   [ '(test46.js:5:11:7:4)' ],
  '(test46.js:6:12:6:15)':
   [ '(test46.js:2:11:4:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test46.js:1:1:9:5)':
   [ 'anon (test46.js:1:2:9:2)' ],
  'anon (test46.js:8:3:8:6)':
   [ 'anon (test46.js:5:11:7:4)' ],
  'anon (test46.js:6:12:6:15)':
   [ 'anon (test46.js:2:11:4:4)' ] }
*/