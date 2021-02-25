function foo() {
  return "foo called";
}
var y = foo;
y();


/*Expected DCG Output
{
  '(test8.js:5:1:5:4)': [ '(test8.js:1:1:3:2)' ]
}
*/

/*Expected DCG2 Output
{ 'global (test8.js:5:1:5:4)':
   [ 'foo (test8.js:1:1:3:2)' ] }
*/