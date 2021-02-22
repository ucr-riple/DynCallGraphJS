(function () {
  var obj = {
    bar: function () {
      return "bar";
    },
    foo: function (x) {
      return [x];
    },
  };
  function main() {
    var y = obj["fo" + "o"].apply(this, [obj["bar"]]);
    y = y[y.length - 1];
    y.apply(this);
  }
  main();
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:1:1:16:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:1:2:16:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:15:3:15:9)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:10:3:14:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:11:13:11:54)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:6:10:8:6)',
     '(/home/XYZ/research/DynCallGraphJS/examples/test28.js:3:10:5:6)' ],
  '(/home/renzo/XYZ/DynCallGraphJS/examples/test28.js:13:5:13:18)': [ 'apply (Native)' ] }
*/