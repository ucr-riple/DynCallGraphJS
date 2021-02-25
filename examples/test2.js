function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
foo(bar);


/*Expected DCG Output
{
  '(test2.js:7:1:7:9)': [
    '(test2.js:1:1:3:2)'
  ],
  '(test2.js:2:10:2:15)': [
    '(test2.js:4:1:6:2)'
  ]
}
*/

/*Expected DCG2 Output
{ 'global (test2.js:7:1:7:9)':
   [ 'foo (test2.js:1:1:3:2)' ],
  'foo (test2.js:2:10:2:15)':
   [ 'bar (test2.js:4:1:6:2)' ] }
*/