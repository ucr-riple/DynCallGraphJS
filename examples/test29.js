(function () {
  function y() {
    return arguments[0]();
  }
  (function x() {
    y.apply(null, arguments);
  })(function () {
    return "args";
  });
})();
