(function () {
  var obj = {
    foo: function (p, q) {
      p();
      var p = q;
    },
    bar: function () {
      return "z";
    },
    dan: function () {
      return "a";
    },
  };
  var x = obj["b" + "ar"];
  var y = obj["bar"];
  obj.foo(x, y);
})();
