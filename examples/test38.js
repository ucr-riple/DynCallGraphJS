var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.push(function () {
  return "z";
});
arrayOfFunction[2].call(this);
