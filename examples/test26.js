(function () {
  var obj = {
    foo: function () {
      var x = obj["bar"];
      return x;
    },
    bar: function () {
      return "bar";
    },
  };
  function main() {
    var y = obj["fo" + "o"];
    y.call(this);
  }
  main();
})();
