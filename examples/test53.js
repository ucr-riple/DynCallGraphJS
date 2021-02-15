(function () {
  var arr = {};
  function name(x, func) {
    func(x);
  }
  var cb = function (ar) {
    return "cb" + ar;
  };
  for (var i = 0; i < 5; i++) {
    extend(arr, name(i, cb));
  }
  function extend(target, source) {
    if (source) {
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  }
})();
