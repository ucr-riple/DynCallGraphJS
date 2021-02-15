(function () {
  function foo() {
    return [function () {}, function () {}];
  }
  var qoute = foo();
  qoute[0]();
})();
