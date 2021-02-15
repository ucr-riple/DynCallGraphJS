(function () {
  var obj = {
    foo: function (p, q) {
      p();
    },
    bar: function () {
      return "z";
    },
    dan: function () {
      return "a";
    },
  };
  function barret() {
    return "bar";
  }
  var x = obj["b" + "ar"];
  var y = obj[barret()];
  obj.foo(x, y);
})();
