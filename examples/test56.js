(function () {
  var handler;
  var obj = {
    foo: function () {
      handler = function () {
        return "x";
      };
    },
    bar: function (now) {
      return {
        event: function () {
          return now();
        },
      };
    },
    dan: function (fun) {
      return obj[fun](handler);
    },
  };
  obj.foo();
  var x = obj.dan("bar");
  x.event();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:1:1:23:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:1:2:23:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test56.js:20:3:20:12)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:4:10:8:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test56.js:21:11:21:25)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:16:10:18:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test56.js:17:14:17:31)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:9:10:15:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test56.js:22:3:22:12)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:11:16:13:10)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test56.js:12:18:12:23)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test56.js:5:17:7:8)' ] }
*/