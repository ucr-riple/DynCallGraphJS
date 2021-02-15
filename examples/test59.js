(function () {
  var obj = {
    foo: function (bar) {
      return bar();
    },
  };
  obj["fo" + "o"](function () {
    return "y";
  });
})();
