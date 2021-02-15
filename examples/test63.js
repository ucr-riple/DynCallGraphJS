(function () {
  function foo() {
    foo = function () {
      return 3;
    };
    return 0;
  }
  foo();
  foo();
})();
