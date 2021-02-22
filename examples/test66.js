(function () {
  var obj = {
    foo: function () {
      var func;
      (function () {
        if (typeof func) {
          func = function () {
            return;
          };
        }
        func();
      })();
    },
  };
  obj.foo();
})();


/*Expected Output
{ '(test66.js:1:1:16:5)':
   [ '(test66.js:1:2:16:2)' ],
  '(test66.js:15:3:15:12)':
   [ '(test66.js:3:10:13:6)' ],
  '(test66.js:5:7:12:11)':
   [ '(test66.js:5:8:12:8)' ],
  '(test66.js:11:9:11:15)':
   [ '(test66.js:7:18:9:12)' ] }
*/