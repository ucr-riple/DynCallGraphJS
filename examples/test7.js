var x = "y";
function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
x == "" ? bar() : foo(bar);
