function foo() {
  return "foo called";
}
var y = foo;
y();


/*Expected Output
{
  '(test8.js:5:1:5:4)': [ '(test8.js:1:1:3:2)' ]
}
*/