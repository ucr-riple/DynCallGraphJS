function f(val) {
  return val;
}
function g() {
  return "g";
}
function x(fun) {
  return fun();
}
function y() {
  return "y";
}
x(y()? f(function () {return "value";}): g()
);
