(function () {
  var handler;
  var obj = {
    foo: function () {
      handler = function () {
        return "x";
      };
    },
    bar: function (now) {
      return {
        event: function () {
          return now();
        },
      };
    },
    dan: function (fun) {
      return obj[fun](handler);
    },
  };
  obj.foo();
  var x = obj.dan("bar");
  x.event();
})();


/*Expected DCG Output
{ '(test56.js:1:1:23:5)':
   [ '(test56.js:1:2:23:2)' ],
  '(test56.js:20:3:20:12)':
   [ '(test56.js:4:10:8:6)' ],
  '(test56.js:21:11:21:25)':
   [ '(test56.js:16:10:18:6)' ],
  '(test56.js:17:14:17:31)':
   [ '(test56.js:9:10:15:6)' ],
  '(test56.js:22:3:22:12)':
   [ '(test56.js:11:16:13:10)' ],
  '(test56.js:12:18:12:23)':
   [ '(test56.js:5:17:7:8)' ] }
*/

/*Expected DCG2 Output
{ 'global (test56.js:1:1:23:5)':
   [ 'anon (test56.js:1:2:23:2)' ],
  'anon (test56.js:20:3:20:12)':
   [ 'anon (test56.js:4:10:8:6)' ],
  'anon (test56.js:21:11:21:25)':
   [ 'anon (test56.js:16:10:18:6)' ],
  'anon (test56.js:17:14:17:31)':
   [ 'anon (test56.js:9:10:15:6)' ],
  'anon (test56.js:22:3:22:12)':
   [ 'anon (test56.js:11:16:13:10)' ],
  'anon (test56.js:12:18:12:23)':
   [ 'anon (test56.js:5:17:7:8)' ] }
*/