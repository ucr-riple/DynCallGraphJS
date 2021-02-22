var arrayOfFunction = [
  function () {
    return "x";
  },
];
var arr = [
  function () {
    return "y";
  },
  function () {
    return "z";
  },
];
for (i = 0; i < 2; i++) {
  arrayOfFunction.push(arr[i]);
}
arrayOfFunction[2]();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test39.js:15:3:15:31)': [ 'push (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test39.js:17:1:17:21)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test39.js:10:3:12:4)' ] }
*/