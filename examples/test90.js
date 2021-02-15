(function () {
  function foo() {
    return function bar() {};
  }
  var qoute = foo();
  qoute();
})();
