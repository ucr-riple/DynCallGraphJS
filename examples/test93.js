var functionContainer = function () {
  return {
    function1: function () {
      return;
    },

    function2: function () {
      return;
    },
  };
};
var x = functionContainer();
x.function2();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test93.js:12:9:12:28)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test93.js:1:25:11:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test93.js:13:1:13:14)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test93.js:7:16:9:6)' ] }
*/