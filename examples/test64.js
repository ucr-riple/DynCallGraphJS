(function () {
  function foo() {
    var x = function () {};
    var y = function () {
      x();
    };
    return y;
  }
  foo()();
})();
