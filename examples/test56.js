(function () {
  var handler;
  var obj = {
    foo: function () {
      handler = function () {
        return "x";
      };
    },
    bar: function (now) {
      return {
        event: function () {
          return now();
        },
      };
    },
    dan: function (fun) {
      return obj[fun](handler);
    },
  };
  obj.foo();
  var x = obj.dan("bar");
  x.event();
})();
