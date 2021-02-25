(function () {
  var obj = {
    foo: function (p, q) {
      p();
      var p = q;
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


/*Expected DCG Output
{ '(test96.js:1:1:17:5)':
   [ '(test96.js:1:2:17:2)' ],
  '(test96.js:16:3:16:16)':
   [ '(test96.js:3:10:6:6)' ],
  '(test96.js:4:7:4:10)':
   [ '(test96.js:7:10:9:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test96.js:1:1:17:5)':
   [ 'anon (test96.js:1:2:17:2)' ],
  'anon (test96.js:16:3:16:16)':
   [ 'anon (test96.js:3:10:6:6)' ],
  'anon (test96.js:4:7:4:10)':
   [ 'anon (test96.js:7:10:9:6)' ] }
*/