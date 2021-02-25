(function () {
  function foo() {
    return [function () {}, function () {}];
  }
  var qoute = foo();
  qoute[0]();
})();


/*Expected DCG Output
{ '(test92.js:1:1:7:5)':
   [ '(test92.js:1:2:7:2)' ],
  '(test92.js:5:15:5:20)':
   [ '(test92.js:2:3:4:4)' ],
  '(test92.js:6:3:6:13)':
   [ '(test92.js:3:13:3:27)' ] }
*/

/*Expected DCG2 Output
{ 'global (test92.js:1:1:7:5)':
   [ 'anon (test92.js:1:2:7:2)' ],
  'anon (test92.js:5:15:5:20)':
   [ 'foo (test92.js:2:3:4:4)' ],
  'anon (test92.js:6:3:6:13)':
   [ 'anon (test92.js:3:13:3:27)' ] }
*/