(function () {
  function foo(x) {
    return x;
  }
  function bar() {
    return;
  }
  for (var i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      foo(i);
    } else {
      bar();
    }
  }
})();
