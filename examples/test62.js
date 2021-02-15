(function () {
  var x = function () {
    return 2;
  };
  var y = function () {
    return x();
  };
  y();
})();
