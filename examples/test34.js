(function (arr) {
  (function () {
    arr[0]();
  })();
})([
  function () {
    return 1;
  },
  function () {
    return 2;
  },
]);


/*Expected DCG Output
{ '(test34.js:1:1:12:3)':
   [ '(test34.js:1:2:5:2)' ],
  '(test34.js:2:3:4:7)':
   [ '(test34.js:2:4:4:4)' ],
  '(test34.js:3:5:3:13)':
   [ '(test34.js:6:3:8:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test34.js:1:1:12:3)':
   [ 'anon (test34.js:1:2:5:2)' ],
  'anon (test34.js:2:3:4:7)':
   [ 'anon (test34.js:2:4:4:4)' ],
  'anon (test34.js:3:5:3:13)':
   [ 'anon (test34.js:6:3:8:4)' ] }
*/