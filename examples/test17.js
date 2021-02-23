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
{ '(test17.js:15:1:15:9)':
   [ '(test17.js:5:9:7:2)' ],
  '(test17.js:6:16:6:21)':
   [ '(test17.js:9:7:11:2)' ] }
*/