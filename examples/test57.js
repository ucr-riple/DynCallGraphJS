(function () {
  var handler = function (original) {
    return original;
  };
  var neon = function () {
    return "y";
  };
  var x = handler.apply(this, [neon]);
  x();
})();
