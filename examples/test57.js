(function () {
  var handler = function (original) {
    return original;
  };
  var neon = function () {
    return "y";
  };
  var x = handler.apply(this, [neon]);
  x();
})();


/*Expected DCG Output
{ '(test57.js:1:1:10:5)':
   [ '(test57.js:1:2:10:2)' ],
  '(test57.js:8:11:8:38)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(test57.js:2:17:4:4)' ],
  '(test57.js:9:3:9:6)':
   [ '(test57.js:5:14:7:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test57.js:1:1:10:5)':
   [ 'anon (test57.js:1:2:10:2)' ],
  'anon (test57.js:8:11:8:38)':
   [ 'apply (Native)(test57.js:8:11:8:38)' ],
  'apply (Native) (test57.js:8:11:8:38)':
   [ 'anon (test57.js:2:17:4:4)' ],
  'anon (test57.js:9:3:9:6)':
   [ 'anon (test57.js:5:14:7:4)' ] }
*/