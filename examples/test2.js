function foo(baz) {
  return baz();
}
function bar() {
  return "bar";
}
foo(bar);