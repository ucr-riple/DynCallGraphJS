var obj = {};
obj.x = function f1(f) {
  return foo();
};
obj.y = function f2(f) {
  f == "foo" ? foo() : bar();
};
var m = obj["y"];
foo = function () {
  return "foo called";
};
bar = function () {
  return "bar called";
};
m("foo");


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test17.js:15:1:15:9)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test17.js:5:9:7:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test17.js:6:16:6:21)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test17.js:9:7:11:2)' ] }
*/