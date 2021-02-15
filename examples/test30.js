(function () {
  var fns = arguments;
  fns[0]["y"]();
})({
  y: function () {
    return "y";
  },
  z: function () {
    return "z";
  },
});
