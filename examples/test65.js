(function () {
  function main() {
    (function () {
      var x = function () {
        return 0;
      };
      var y = function () {
        return x();
      };
      y();
    })();
  }
  main();
})();
