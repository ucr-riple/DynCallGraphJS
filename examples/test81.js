(function () {
  var o = {
    print: function () {
      return this.b;
    },
  };
  var bValue = function () {
    return "x";
  };
  Object.defineProperty(o, "b", {
    get: function () {
      return bValue;
    },
    set: function (newValue) {
      bValue = newValue;
    },
    enumerable: true,
    configurable: true,
  });
  var x = o.b;
  x();
})();
