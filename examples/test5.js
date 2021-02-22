var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

obj.foo;


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test5.js:9:1:9:8)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test5.js:4:13:6:4)'
  ]
}
*/