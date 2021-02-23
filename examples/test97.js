(function () {
  var obj = {
    foo: function (p, q) {
      p();
    },
    bar: function () {
      return "z";
    },
    dan: function () {
      return "a";
    },
  };
  var x = obj["b" + "ar"];
  var y = obj["bar"];
  obj.foo(x, y);
})();


/*Expected Output
{ '(test97.js:1:1:16:5)':
   [ '(test97.js:1:2:16:2)' ],
  '(test97.js:15:3:15:16)':
   [ '(test97.js:3:10:5:6)' ],
  '(test97.js:4:7:4:10)':
   [ '(test97.js:6:10:8:6)' ] }
*/