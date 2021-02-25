(function () {
  var x = [];
  var y = [];
  function foo(f) {
    return;
  }
  x[0] = foo;
  y[0] = foo;
  y[0]();
  x[0]();
})();


/*Expected DCG Output
{ '(test55.js:1:1:11:5)':
   [ '(test55.js:1:2:11:2)' ],
  '(test55.js:9:3:9:9)':
   [ '(test55.js:4:3:6:4)' ],
  '(test55.js:10:3:10:9)':
   [ '(test55.js:4:3:6:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test55.js:1:1:11:5)':
   [ 'anon (test55.js:1:2:11:2)' ],
  'anon (test55.js:9:3:9:9)':
   [ 'foo (test55.js:4:3:6:4)' ],
  'anon (test55.js:10:3:10:9)':
   [ 'foo (test55.js:4:3:6:4)' ] }
*/