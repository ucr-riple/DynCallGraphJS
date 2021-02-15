(function () {
  var fns = arguments;
  fns[0][0]();
})([
  function () {
    return "y";
  },
  function () {
    return "z";
  },
]);
