function foo() {
  return "foo called";
}
var y = foo;
y();


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test8.js:5:1:5:4)': [ '(/home/XYZ/research/DynCallGraphJS/examples/test8.js:1:1:3:2)' ]
}
*/