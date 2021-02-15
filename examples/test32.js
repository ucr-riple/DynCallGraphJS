var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.unshift(function () {
  return "z";
});
arrayOfFunction[0]();
