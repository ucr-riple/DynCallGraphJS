function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
foo(bar);


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test2.js:7:1:7:9)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test2.js:1:1:3:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test2.js:2:10:2:15)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test2.js:4:1:6:2)'
  ]
}
*/