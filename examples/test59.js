(function () {
  var obj = {
    foo: function (bar) {
      return bar();
    },
  };
  obj["fo" + "o"](function () {
    return "y";
  });
})();


/*Expected Output
{ '(test59.js:1:1:10:5)':
   [ '(test59.js:1:2:10:2)' ],
  '(test59.js:7:3:9:5)':
   [ '(test59.js:3:10:5:6)' ],
  '(test59.js:4:14:4:19)':
   [ '(test59.js:7:19:9:4)' ] }
*/