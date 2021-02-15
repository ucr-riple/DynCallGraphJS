(function () {
  var x = [];
  var y = [];
  function foo(f) {
    return;
  }
  x[0] = foo;
  y[0] = foo;
  y[0]();
  x[0]();
})();
