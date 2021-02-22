var choose = function (name) {
  if (name == "foo") {
    foo();
  } else if (name == "bar") {
    bar();
  }
};
function foo() {
  return "foo";
}
function bar() {
  return "bar";
}
choose("foo");


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test4.js:14:1:14:14)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test4.js:1:14:7:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test4.js:3:5:3:10)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test4.js:8:1:10:2)'
  ]
}
*/