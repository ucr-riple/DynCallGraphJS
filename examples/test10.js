var x = [
  function () {
    return "f1";
  },
];
var y = [
  function () {
    return "f2";
  },
];
var m = y[0];
m();


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test10.js:12:1:12:4)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test10.js:7:3:9:4)'
  ]
}
*/