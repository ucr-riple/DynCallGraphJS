(function (mod) {
  function foo(modId) {
    mod[modId].call(this, function () {
      return "x";
    });
  }
  return foo(0);
})([
  function (newcl) {
    newcl();
  },
]);


/*Expected DCG Output
{ '(test60.js:1:1:12:3)':
   [ '(test60.js:1:2:8:2)' ],
  '(test60.js:7:10:7:16)':
   [ '(test60.js:2:3:6:4)' ],
  '(test60.js:3:5:5:7)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test60.js:9:3:11:4)' ],
  '(test60.js:10:5:10:12)':
   [ '(test60.js:3:27:5:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test60.js:1:1:12:3)':
   [ 'anon (test60.js:1:2:8:2)' ],
  'anon (test60.js:7:10:7:16)':
   [ 'foo (test60.js:2:3:6:4)' ],
  'foo (test60.js:3:5:5:7)':
   [ 'call (Native)(test60.js:3:5:5:7)' ],
  'call (Native) (test60.js:3:5:5:7)':
   [ 'anon (test60.js:9:3:11:4)' ],
  'anon (test60.js:10:5:10:12)':
   [ 'anon (test60.js:3:27:5:6)' ] }
*/