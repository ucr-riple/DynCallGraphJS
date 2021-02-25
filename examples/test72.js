(function () {
  function bar() {
    return;
  }

  function foo(f) {
    f();
    bar();
  }

  foo(bar);
})();


/*Expected DCG Output
{ '(test72.js:1:1:12:5)':
   [ '(test72.js:1:2:12:2)' ],
  '(test72.js:11:3:11:11)':
   [ '(test72.js:6:3:9:4)' ],
  '(test72.js:7:5:7:8)':
   [ '(test72.js:2:3:4:4)' ],
  '(test72.js:8:5:8:10)':
   [ '(test72.js:2:3:4:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test72.js:1:1:12:5)':
   [ 'anon (test72.js:1:2:12:2)' ],
  'anon (test72.js:11:3:11:11)':
   [ 'foo (test72.js:6:3:9:4)' ],
  'foo (test72.js:7:5:7:8)':
   [ 'bar (test72.js:2:3:4:4)' ],
  'foo (test72.js:8:5:8:10)':
   [ 'bar (test72.js:2:3:4:4)' ] }
*/