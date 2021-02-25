(function () {
  var arrayOfFunction = [
    function () {
      return "x";
    },
    function () {
      return "y";
    },
  ];
  arrayOfFunction.shift()();
  arrayOfFunction[0]();
})();


/*Expected DCG Output
{ '(test40.js:1:1:12:5)':
   [ '(test40.js:1:2:12:2)' ],
  '(test40.js:10:3:10:26)': [ 'shift (Native)' ],
  '(test40.js:10:3:10:28)':
   [ '(test40.js:3:5:5:6)' ],
  '(test40.js:11:3:11:23)':
   [ '(test40.js:6:5:8:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test40.js:1:1:12:5)':
   [ 'anon (test40.js:1:2:12:2)' ],
  'anon (test40.js:10:3:10:26)':
   [ 'shift (Native)(test40.js:10:3:10:26)' ],
  'anon (test40.js:10:3:10:28)':
   [ 'anon (test40.js:3:5:5:6)' ],
  'anon (test40.js:11:3:11:23)':
   [ 'anon (test40.js:6:5:8:6)' ] }
*/