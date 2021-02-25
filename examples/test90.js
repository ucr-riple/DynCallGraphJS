(function () {
  function foo() {
    return function bar() {};
  }
  var qoute = foo();
  qoute();
})();


/*Expected DCG Output
{ '(test90.js:1:1:7:5)':
   [ '(test90.js:1:2:7:2)' ],
  '(test90.js:5:15:5:20)':
   [ '(test90.js:2:3:4:4)' ],
  '(test90.js:6:3:6:10)':
   [ '(test90.js:3:12:3:29)' ] }
*/

/*Expected DCG2 Output
{ 'global (test90.js:1:1:7:5)':
   [ 'anon (test90.js:1:2:7:2)' ],
  'anon (test90.js:5:15:5:20)':
   [ 'foo (test90.js:2:3:4:4)' ],
  'anon (test90.js:6:3:6:10)':
   [ 'bar (test90.js:3:12:3:29)' ] }
*/