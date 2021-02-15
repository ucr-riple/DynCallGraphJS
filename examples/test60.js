(function (mod) {
  function foo(modId) {
    mod[modId].call(this, function () {
      return "x";
    });
  }
  return foo(0);
})([
  function (newcl) {
    newcl();
  },
]);
