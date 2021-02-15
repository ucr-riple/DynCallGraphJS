(function () {
  function foo() {
    return (function foo2() {
      return function foo3() {};
    })();
  }
  var bar = foo();
  bar();
})();
