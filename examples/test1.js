function foo(p, q) {
  p();
}
function bar() {
  return;
}
var x = bar;
var y = bar;
foo(x, y);


/*Expected DCG Output
{
  '(test1.js:9:1:9:10)': [
    '(test1.js:1:1:3:2)'
  ],
  '(test1.js:2:3:2:6)': [
    '(test1.js:4:1:6:2)'
  ]
}
*/

/*Expected DCG2 Output
{ 'global (test1.js:9:1:9:10)':
   [ 'foo (test1.js:1:1:3:2)' ],
  'foo (test1.js:2:3:2:6)':
   [ 'bar (test1.js:4:1:6:2)' ] }
*/