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


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test84.js:1:1:17:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test84.js:1:2:17:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test84.js:14:15:14:41)': [ 'Proxy (Native)' ],
  'anon (Native)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test84.js:8:8:12:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test84.js:16:1:16:4)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test84.js:9:12:11:6)' ] }
*/