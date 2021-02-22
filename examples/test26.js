(function () {
  var obj = {
    foo: function () {
      var x = obj["bar"];
      return x;
    },
    bar: function () {
      return "bar";
    },
  };
  function main() {
    var y = obj["fo" + "o"];
    y.call(this);
  }
  main();
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:1:1:16:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:1:2:16:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:15:3:15:9)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:11:3:14:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:13:5:13:17)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test26.js:3:10:6:6)' ] }
*/