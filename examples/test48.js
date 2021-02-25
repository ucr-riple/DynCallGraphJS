function makeCounter() {
  var count = 0;
  return function () {
    return count++;
  };
}

var counter = makeCounter();
counter();
counter();


/*Expected DCG Output
{ '(test48.js:8:15:8:28)':
   [ '(test48.js:1:1:6:2)' ],
  '(test48.js:9:1:9:10)':
   [ '(test48.js:3:10:5:4)' ],
  '(test48.js:10:1:10:10)':
   [ '(test48.js:3:10:5:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test48.js:8:15:8:28)':
   [ 'makeCounter (test48.js:1:1:6:2)' ],
  'global (test48.js:9:1:9:10)':
   [ 'anon (test48.js:3:10:5:4)' ],
  'global (test48.js:10:1:10:10)':
   [ 'anon (test48.js:3:10:5:4)' ] }
*/