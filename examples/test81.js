(function () {
  var o = {
    print: function () {
      return this.b;
    },
  };
  var bValue = function () {
    return "x";
  };
  Object.defineProperty(o, "b", {
    get: function () {
      return bValue;
    },
    set: function (newValue) {
      bValue = newValue;
    },
    enumerable: true,
    configurable: true,
  });
  var x = o.b;
  x();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test81.js:1:1:22:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test81.js:1:2:22:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test81.js:10:3:19:5)': [ 'defineProperty (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test81.js:20:11:20:14)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test81.js:11:10:13:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test81.js:21:3:21:6)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test81.js:7:16:9:4)' ] }
*/