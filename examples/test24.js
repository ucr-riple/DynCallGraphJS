(function () {
  function foo(event) {
    event();
  }
  var bar = function () {
    return;
  };
  foo(bar);
})();


/*Expected DCG Output
{ '(test24.js:1:1:9:5)':
   [ '(test24.js:1:2:9:2)' ],
  '(test24.js:8:3:8:11)':
   [ '(test24.js:2:3:4:4)' ],
  '(test24.js:3:5:3:12)':
   [ '(test24.js:5:13:7:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test24.js:1:1:9:5)':
   [ 'anon (test24.js:1:2:9:2)' ],
  'anon (test24.js:8:3:8:11)':
   [ 'foo (test24.js:2:3:4:4)' ],
  'foo (test24.js:3:5:3:12)':
   [ 'anon (test24.js:5:13:7:4)' ] }
*/