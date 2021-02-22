var x = "b";
function getKeys(inp) {
  return "a" + inp;
}
var capitalize = {
  alpha: {
    ab: function () {
      return "A";
    },
  },
};
var key = getKeys(x);
cap = capitalize.alpha;
cap[key]();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test68.js:12:11:12:21)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test68.js:2:1:4:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test68.js:14:1:14:11)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test68.js:7:9:9:6)' ] }
*/