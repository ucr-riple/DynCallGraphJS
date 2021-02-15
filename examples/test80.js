var object1 = {};
var fun = function () {
  return "fun";
};
Object.defineProperties(object1, {
  property1: {
    value: function () {
      return "no";
    },
    writable: false,
  },
  property2: {
    value: fun,
    writable: true,
  },
});
object1.property2();
