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
  '(test4.js:14:1:14:14)': [
    '(test4.js:1:14:7:2)'
  ],
  '(test4.js:3:5:3:10)': [
    '(test4.js:8:1:10:2)'
  ]
}
*/