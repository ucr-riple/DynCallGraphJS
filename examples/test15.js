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


/*Expected Output
{ '(test15.js:16:5:16:8)':
   [ '(test15.js:5:1:7:2)' ] }
*/