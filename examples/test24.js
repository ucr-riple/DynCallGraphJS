(function () {
  function foo(event) {
    event();
  }
  var bar = function () {
    return;
  };
  foo(bar);
})();
