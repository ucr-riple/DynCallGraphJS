var x = 0;
var index = ["a", "b"];
var capitalize = {
  a: function () {
    return "A";
  },
  b: function () {
    return "B";
  },
};
for (i in index) {
  x = index[i];
  capitalize[x]();
}


/*Expected Output
{ '(test67.js:13:3:13:18)':
   [ '(test67.js:4:6:6:4)',
     '(test67.js:7:6:9:4)' ] }
*/