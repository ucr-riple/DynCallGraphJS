(function () {
  var arrayOfFunction = [
    function () {
      return "x";
    },
    function () {
      return "y";
    },
  ];
  arrayOfFunction.shift()();
  arrayOfFunction[0]();
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:1:1:12:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:1:2:12:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:10:3:10:26)': [ 'shift (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:10:3:10:28)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:3:5:5:6)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:11:3:11:23)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test40.js:6:5:8:6)' ] }
*/