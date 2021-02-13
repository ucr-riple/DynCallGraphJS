var expression = "";
function f() {
  return "f";
}
function g() {
  return "g";
}
switch (expression) {
  case "f":
    f();
    break;
  case "g":
    g();
    break;
  default:
    g();
}
