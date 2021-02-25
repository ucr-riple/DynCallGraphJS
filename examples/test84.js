(function(){var target = {
  x: 10,
  y: function () {
    return x;
  },
};
var handler = {
  get: function (obj, prop) {
    return function () {
      return 42;
    };
  },
};
var target1 = new Proxy(target, handler);
var z = target1.y;
z();
})()


/*Expected DCG Output
{ '(test84.js:1:1:17:5)':
   [ '(test84.js:1:2:17:2)' ],
  '(test84.js:14:15:14:41)': [ 'Proxy (Native)' ],
  'anon (Native)':
   [ '(test84.js:8:8:12:4)' ],
  '(test84.js:16:1:16:4)':
   [ '(test84.js:9:12:11:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test84.js:1:1:17:5)':
   [ 'anon (test84.js:1:2:17:2)' ],
  'anon (test84.js:14:15:14:41)':
   [ 'Proxy (Native)(test84.js:14:15:14:41)' ],
  'anon (Native)':
   [ 'anon (test84.js:8:8:12:4)' ],
  'anon (test84.js:16:1:16:4)':
   [ 'anon (test84.js:9:12:11:6)' ] }
*/