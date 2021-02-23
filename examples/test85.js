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


/*Expected Output
{ '(test85.js:19:14:19:42)': [ 'Proxy (Native)' ],
  'system (Native)':
   [ '(test85.js:8:8:17:4)' ],
  '(test85.js:20:1:20:17)':
   [ '(test85.js:13:14:15:8)' ],
  '(test85.js:14:16:14:37)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(test85.js:3:12:5:4)' ],
  'method1 (Native)':
   [ '(test85.js:8:8:17:4)' ] }
*/