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
{ '(test68.js:12:11:12:21)':
   [ '(test68.js:2:1:4:2)' ],
  '(test68.js:14:1:14:11)':
   [ '(test68.js:7:9:9:6)' ] }
*/