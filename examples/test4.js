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
