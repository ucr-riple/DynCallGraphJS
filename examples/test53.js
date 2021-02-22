(function () {
  var arr = {};
  function name(x, func) {
    func(x);
  }
  var cb = function (ar) {
    return "cb" + ar;
  };
  for (var i = 0; i < 5; i++) {
    extend(arr, name(i, cb));
  }
  function extend(target, source) {
    if (source) {
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  }
})();


/*Expected Output
{ '(test53.js:1:1:22:5)':
   [ '(test53.js:1:2:22:2)' ],
  '(test53.js:10:17:10:28)':
   [ '(test53.js:3:3:5:4)' ],
  '(test53.js:4:5:4:12)':
   [ '(test53.js:6:12:8:4)' ],
  '(test53.js:10:5:10:29)':
   [ '(test53.js:12:3:21:4)' ] }
*/