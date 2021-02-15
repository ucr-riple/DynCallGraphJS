var target1 = {
  message1: "hello",
  method1: function method1() {
    return this.message1;
  },
};
var handler2 = {
  get: function (target, prop, receiver) {
    var propValue = target[prop];
    if (typeof propValue != "function") {
      return propValue;
    } else {
      return function () {
        return propValue.apply(this);
      };
    }
  },
};
var proxy2 = new Proxy(target1, handler2);
proxy2.method1();
