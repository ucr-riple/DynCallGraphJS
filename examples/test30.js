(function () {
  var fns = arguments;
  fns[0]["y"]();
})({
  y: function () {
    return "y";
  },
  z: function () {
    return "z";
  },
});


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test30.js:1:1:11:3)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test30.js:1:2:4:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test30.js:3:3:3:16)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test30.js:5:6:7:4)' ] }
*/