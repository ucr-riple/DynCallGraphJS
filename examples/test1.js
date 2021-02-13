function foo(p, q) {
  p();
}
function bar() {
  return;
}
var x = bar;
var y = bar;
foo(x, y);