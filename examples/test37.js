var arr = [
  function () {
    return "x";
  },
];
Array.prototype.forEach.call(arr, function (val) {
  return val();
});


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test37.js:6:1:8:3)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test37.js:6:35:8:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test37.js:7:10:7:15)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test37.js:2:3:4:4)' ] }
*/