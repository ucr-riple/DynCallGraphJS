(function (arr) {
  (function () {
    arr[0]();
  })();
})([
  function () {
    return 1;
  },
  function () {
    return 2;
  },
]);
