var arr = [
  function () {
    return "x";
  },
];
Array.prototype.forEach.call(arr, function (val) {
  return val();
});
