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
