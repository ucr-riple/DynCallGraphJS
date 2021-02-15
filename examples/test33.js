var arrayOfFunction = [];
var alpha = ["x", "y"];
for (var val of alpha) {
  arrayOfFunction[val] = function () {
    return val;
  };
}
arrayOfFunction.x();
