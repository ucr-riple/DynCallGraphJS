(function () {
  var obj = {
    foo: function () {
      return 3;
    },
  };
  var y = function () {
    var x = obj["fo" + "o"];
    return x();
  };
  y();
})();
