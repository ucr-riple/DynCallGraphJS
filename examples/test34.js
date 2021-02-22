(function (arr) {
  (function () {
    arr[0]();
  })();
})([
  function () {
    return 1;
  },
  function () {
    return 2;
  },
]);


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:1:1:12:3)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:1:2:5:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:2:3:4:7)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:2:4:4:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:3:5:3:13)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test34.js:6:3:8:4)' ] }
*/