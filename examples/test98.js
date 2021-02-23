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
  function barret() {
    return "bar";
  }
  var x = obj["b" + "ar"];
  var y = obj[barret()];
  obj.foo(x, y);
})();


/*Expected Output
{ '(test98.js:1:1:19:5)':
   [ '(test98.js:1:2:19:2)' ],
  '(test98.js:17:15:17:23)':
   [ '(test98.js:13:3:15:4)' ],
  '(test98.js:18:3:18:16)':
   [ '(test98.js:3:10:5:6)' ],
  '(test98.js:4:7:4:10)':
   [ '(test98.js:6:10:8:6)' ] }
*/