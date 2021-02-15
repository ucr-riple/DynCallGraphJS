(function () {
  var performanceNow;
  if (true) {
    performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  } else {
    performanceNow = function performanceNow() {
      return function () {
        return 2;
      };
    };
  }
  performanceNow();
})();
