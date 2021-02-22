(function () {
  function foo(event) {
    event();
  }
  var bar = function () {
    return;
  };
  foo(bar);
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:1:1:9:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:1:2:9:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:8:3:8:11)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:2:3:4:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:3:5:3:12)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test24.js:5:13:7:4)' ] }
*/