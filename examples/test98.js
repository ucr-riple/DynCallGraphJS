(function () {
  var obj = {
    foo: function (p, q) {
      p();
    },
    bar: function () {
      return "z";
    },
    dan: function () {
      return "a";
    },
  };
  function barret() {
    return "bar";
  }
  var x = obj["b" + "ar"];
  var y = obj[barret()];
  obj.foo(x, y);
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test98.js:1:1:19:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test98.js:1:2:19:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test98.js:17:15:17:23)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test98.js:13:3:15:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test98.js:18:3:18:16)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test98.js:3:10:5:6)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test98.js:4:7:4:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test98.js:6:10:8:6)' ] }
*/