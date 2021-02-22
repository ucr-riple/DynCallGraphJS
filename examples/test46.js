(function () {
  var x = function () {
    return 0;
  };
  var y = function () {
    return x();
  };
  y();
})();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test46.js:1:1:9:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test46.js:1:2:9:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test46.js:8:3:8:6)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test46.js:5:11:7:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test46.js:6:12:6:15)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test46.js:2:11:4:4)' ] }
*/