var x = "y";
function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
x == "" ? bar() : foo(bar);


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test7.js:8:19:8:27)': [ '(/home/XYZ/research/DynCallGraphJS/examples/test7.js:2:1:4:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test7.js:3:10:3:15)': [ '(/home/XYZ/research/DynCallGraphJS/examples/test7.js:5:1:7:2)' ]
}
*/