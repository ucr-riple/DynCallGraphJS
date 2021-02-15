(function () {
  function bar() {
    return;
  }

  function foo(f) {
    f();
    bar();
  }

  foo(bar);
})();
