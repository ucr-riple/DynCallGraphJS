var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

obj.foo;


/*Expected Output
{
  '(test5.js:9:1:9:8)': [
    '(test5.js:4:13:6:4)'
  ]
}
*/