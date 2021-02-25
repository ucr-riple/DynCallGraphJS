(function () {
  function foo() {
    foo = function () {
      return 3;
    };
    return 0;
  }
  foo();
  foo();
})();


/*Expected DCG Output
{ '(test63.js:1:1:10:5)':
   [ '(test63.js:1:2:10:2)' ],
  '(test63.js:8:3:8:8)':
   [ '(test63.js:2:3:7:4)' ],
  '(test63.js:9:3:9:8)':
   [ '(test63.js:3:11:5:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test63.js:1:1:10:5)':
   [ 'anon (test63.js:1:2:10:2)' ],
  'anon (test63.js:8:3:8:8)':
   [ 'foo (test63.js:2:3:7:4)' ],
  'anon (test63.js:9:3:9:8)':
   [ 'anon (test63.js:3:11:5:6)' ] }
*/