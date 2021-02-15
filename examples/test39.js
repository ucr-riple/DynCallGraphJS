var arrayOfFunction = [
  function () {
    return "x";
  },
];
var arr = [
  function () {
    return "y";
  },
  function () {
    return "z";
  },
];
for (i = 0; i < 2; i++) {
  arrayOfFunction.push(arr[i]);
}
arrayOfFunction[2]();
