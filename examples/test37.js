var arr = [
  function () {
    return "x";
  },
];
Array.prototype.forEach.call(arr, function (val) {
  return val();
});


/*Expected DCG Output
{ '(test37.js:6:1:8:3)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test37.js:6:35:8:2)' ],
  '(test37.js:7:10:7:15)':
   [ '(test37.js:2:3:4:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test37.js:6:1:8:3)':
   [ 'call (Native)(test37.js:6:1:8:3)' ],
  'call (Native) (test37.js:6:1:8:3)':
   [ 'anon (test37.js:6:35:8:2)' ],
  'anon (test37.js:7:10:7:15)':
   [ 'anon (test37.js:2:3:4:4)' ] }
*/