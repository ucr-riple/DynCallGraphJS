function foo(p, q) {
  p();
}
function bar() {
  return;
}
var x = bar;
var y = bar;
foo(x, y);


/*Expected Output
{
  '(test1.js:9:1:9:10)': [
    '(test1.js:1:1:3:2)'
  ],
  '(test1.js:2:3:2:6)': [
    '(test1.js:4:1:6:2)'
  ]
}
*/