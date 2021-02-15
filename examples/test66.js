(function () {
  var obj = {
    foo: function () {
      var func;
      (function () {
        if (typeof func) {
          func = function () {
            return;
          };
        }
        func();
      })();
    },
  };
  obj.foo();
})();
