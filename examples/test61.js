var obj = {
  x: "xyz",
};
function bar(i) {
  return i;
}

function foo() {
  loop1: for (el in obj) {
    y = bar(el);
  }
}
foo();


/*Expected DCG Output
{ '(test61.js:13:1:13:6)':
   [ '(test61.js:8:1:12:2)' ],
  '(test61.js:10:9:10:16)':
   [ '(test61.js:4:1:6:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test61.js:13:1:13:6)':
   [ 'foo (test61.js:8:1:12:2)' ],
  'foo (test61.js:10:9:10:16)':
   [ 'bar (test61.js:4:1:6:2)' ] }
*/