(function () {
  var obj = {
    bar: function () {
      return "bar";
    },
    foo: function (x) {
      return [x];
    },
  };
  function main() {
    var y = obj["fo" + "o"].apply(this, [obj["bar"]]);
    y = y[y.length - 1];
    y.apply(this);
  }
  main();
})();
