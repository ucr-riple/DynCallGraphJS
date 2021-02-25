var scope = function () {
  return "global";
}; 
function checkscope() {
  var scope = function () {
    return "local";
  }; 
  scope();
}
checkscope();
scope();


/*Expected DCG Output
{ '(test47.js:10:1:10:13)':
   [ '(test47.js:4:1:9:2)' ],
  '(test47.js:8:3:8:10)':
   [ '(test47.js:5:15:7:4)' ],
  '(test47.js:11:1:11:8)':
   [ '(test47.js:1:13:3:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test47.js:10:1:10:13)':
   [ 'checkscope (test47.js:4:1:9:2)' ],
  'checkscope (test47.js:8:3:8:10)':
   [ 'anon (test47.js:5:15:7:4)' ],
  'global (test47.js:11:1:11:8)':
   [ 'anon (test47.js:1:13:3:2)' ] }
*/