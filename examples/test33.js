var arrayOfFunction = [];
var alpha = ["x", "y"];
for (var val of alpha) {
  arrayOfFunction[val] = function () {
    return val;
  };
}
arrayOfFunction.x();


/*Expected Output
{ '(test33.js:8:1:8:20)':
   [ '(test33.js:4:26:6:4)' ] }
*/