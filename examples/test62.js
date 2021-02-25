(function () {
  var x = function () {
    return 2;
  };
  var y = function () {
    return x();
  };
  y();
})();


/*Expected DCG Output
{ '(test62.js:1:1:9:5)':
   [ '(test62.js:1:2:9:2)' ],
  '(test62.js:8:3:8:6)':
   [ '(test62.js:5:11:7:4)' ],
  '(test62.js:6:12:6:15)':
   [ '(test62.js:2:11:4:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test62.js:1:1:9:5)':
   [ 'anon (test62.js:1:2:9:2)' ],
  'anon (test62.js:8:3:8:6)':
   [ 'anon (test62.js:5:11:7:4)' ],
  'anon (test62.js:6:12:6:15)':
   [ 'anon (test62.js:2:11:4:4)' ] }
*/