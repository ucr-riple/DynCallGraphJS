(function () {
  var obj = {
    foo: function () {
      return 3;
    },
  };
  var y = function () {
    var x = obj["fo" + "o"];
    return x();
  };
  y();
})();


/*Expected DCG Output
{ '(test99.js:1:1:12:5)':
   [ '(test99.js:1:2:12:2)' ],
  '(test99.js:11:3:11:6)':
   [ '(test99.js:7:11:10:4)' ],
  '(test99.js:9:12:9:15)':
   [ '(test99.js:3:10:5:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test99.js:1:1:12:5)':
   [ 'anon (test99.js:1:2:12:2)' ],
  'anon (test99.js:11:3:11:6)':
   [ 'anon (test99.js:7:11:10:4)' ],
  'anon (test99.js:9:12:9:15)':
   [ 'anon (test99.js:3:10:5:6)' ] }
*/