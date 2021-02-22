var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.unshift(function () {
  return "z";
});
arrayOfFunction[0]();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test32.js:9:1:11:3)': [ 'unshift (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test32.js:12:1:12:21)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test32.js:9:25:11:2)' ] }
*/