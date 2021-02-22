var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.push(function () {
  return "z";
});
arrayOfFunction[2].call(this);


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test38.js:9:1:11:3)': [ 'push (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test38.js:12:1:12:30)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test38.js:9:22:11:2)' ] }
*/