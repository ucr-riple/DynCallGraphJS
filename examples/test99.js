(function () {
  var obj = {
    foo: function () {
      return 3;
    },
  };
  var y = function () {
    var x = obj["fo" + "o"];
    return x();
  };
  y();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test99.js:1:1:12:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test99.js:1:2:12:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test99.js:11:3:11:6)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test99.js:7:11:10:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test99.js:9:12:9:15)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test99.js:3:10:5:6)' ] }
*/