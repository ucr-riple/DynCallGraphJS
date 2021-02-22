(function () {
  var obj = {
    foo: function () {
      var func;
      (function () {
        if (typeof func) {
          func = function () {
            return;
          };
        }
        func();
      })();
    },
  };
  obj.foo();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test66.js:1:1:16:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test66.js:1:2:16:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test66.js:15:3:15:12)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test66.js:3:10:13:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test66.js:5:7:12:11)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test66.js:5:8:12:8)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test66.js:11:9:11:15)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test66.js:7:18:9:12)' ] }
*/