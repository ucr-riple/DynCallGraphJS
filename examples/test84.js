(function(){var target = {
  x: 10,
  y: function () {
    return x;
  },
};
var handler = {
  get: function (obj, prop) {
    return function () {
      return 42;
    };
  },
};
var target1 = new Proxy(target, handler);
var z = target1.y;
z();
})()