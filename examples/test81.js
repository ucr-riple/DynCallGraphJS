(function () {
  var o = {
    print: function () {
      return this.b;
    },
  };
  var bValue = function () {
    return "x";
  };
  Object.defineProperty(o, "b", {
    get: function () {
      return bValue;
    },
    set: function (newValue) {
      bValue = newValue;
    },
    enumerable: true,
    configurable: true,
  });
  var x = o.b;
  x();
})();


/*Expected DCG Output
{ '(test81.js:1:1:22:5)':
   [ '(test81.js:1:2:22:2)' ],
  '(test81.js:10:3:19:5)': [ 'defineProperty (Native)' ],
  '(test81.js:20:11:20:14)':
   [ '(test81.js:11:10:13:6)' ],
  '(test81.js:21:3:21:6)':
   [ '(test81.js:7:16:9:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test81.js:1:1:22:5)':
   [ 'anon (test81.js:1:2:22:2)' ],
  'anon (test81.js:10:3:19:5)':
   [ 'defineProperty (Native)(test81.js:10:3:19:5)' ],
  'anon (test81.js:20:11:20:14)':
   [ 'anon (test81.js:11:10:13:6)' ],
  'anon (test81.js:21:3:21:6)':
   [ 'anon (test81.js:7:16:9:4)' ] }
*/