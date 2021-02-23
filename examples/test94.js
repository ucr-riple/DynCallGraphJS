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


/*Expected Output
{ '(test94.js:13:3:13:6)':
   [ '(test94.js:10:1:12:2)' ],
  '(test94.js:13:8:13:40)':
   [ '(test94.js:1:1:3:2)' ],
  '(test94.js:13:1:14:2)':
   [ '(test94.js:7:1:9:2)' ],
  '(test94.js:8:10:8:15)':
   [ '(test94.js:13:10:13:39)' ] }
*/