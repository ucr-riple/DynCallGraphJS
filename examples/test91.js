(function () {
  function foo() {
    return (function foo2() {
      return function foo3() {};
    })();
  }
  var bar = foo();
  bar();
})();


/*Expected DCG Output
{ '(test91.js:1:1:9:5)':
   [ '(test91.js:1:2:9:2)' ],
  '(test91.js:7:13:7:18)':
   [ '(test91.js:2:3:6:4)' ],
  '(test91.js:3:12:5:9)':
   [ '(test91.js:3:13:5:6)' ],
  '(test91.js:8:3:8:8)':
   [ '(test91.js:4:14:4:32)' ] }
*/

/*Expected DCG2 Output
{ 'global (test91.js:1:1:9:5)':
   [ 'anon (test91.js:1:2:9:2)' ],
  'anon (test91.js:7:13:7:18)':
   [ 'foo (test91.js:2:3:6:4)' ],
  'foo (test91.js:3:12:5:9)':
   [ 'foo2 (test91.js:3:13:5:6)' ],
  'anon (test91.js:8:3:8:8)':
   [ 'foo3 (test91.js:4:14:4:32)' ] }
*/