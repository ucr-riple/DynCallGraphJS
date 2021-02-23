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
  '(test10.js:12:1:12:4)': [
    '(test10.js:7:3:9:4)'
  ]
}
*/