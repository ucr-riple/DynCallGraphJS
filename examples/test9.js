var arrayOfFunction = [
  function () {
    return "Inside First function";
  },

  function () {
    return "Inside Second function";
  },
];
arrayOfFunction[0]();


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test9.js:10:1:10:21)': [ '(/home/XYZ/research/DynCallGraphJS/examples/test9.js:2:3:4:4)' ]
}
*/