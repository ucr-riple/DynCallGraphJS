(function () {
  if (true) {
    var performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  } else {
    var performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  }
  performanceNow();
})();
