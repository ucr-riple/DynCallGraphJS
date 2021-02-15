function Monster() {
  this.eyeCount = 4;
}

var handler1 = {
  set: function set(obj, prop, value) {
    if (prop === "eyeCount" && value % 2 !== 0) {
      console.log("Monsters must have an even number of eyes");
    } else {
      return Reflect.set.apply(Reflect, arguments);
    }
  },
};
var monster1 = new Monster();
var proxy1 = new Proxy(monster1, handler1);
proxy1.eyeCount = 1;

proxy1.eyeCount;
