(function () {
  function y() {
    return arguments[0]();
  }
  (function x() {
    y.apply(null, arguments);
  })(function () {
    return "args";
  });
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:1:1:10:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:1:2:10:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:5:3:9:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:5:4:7:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:6:5:6:29)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:2:3:4:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:3:12:3:26)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test29.js:7:6:9:4)' ] }
*/