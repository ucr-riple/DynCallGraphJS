(function () {
  var fns = arguments;
  fns[0][0]();
})([
  function () {
    return "y";
  },
  function () {
    return "z";
  },
]);


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test31.js:1:1:11:3)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test31.js:1:2:4:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test31.js:3:3:3:14)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test31.js:5:3:7:4)' ] }
*/