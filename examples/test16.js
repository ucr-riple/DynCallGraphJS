(function () {
  var slice = Array.prototype.slice,
    variadic = function (fn) {
      var fnLength = fn.length;

      if (fnLength < 1) {
        return fn;
      } else if (fnLength === 1) {
        return function () {
          return fn.call(this, slice.call(arguments, 0));
        };
      } else {
        return function () {
          var numberOfArgs = arguments.length,
            namedArgs = slice.call(arguments, 0, fnLength - 1),
            numberOfMissingNamedArgs = Math.max(fnLength - numberOfArgs - 1, 0),
            argPadding = new Array(numberOfMissingNamedArgs),
            variadicArgs = slice.call(arguments, fn.length - 1);

          return fn.apply(
            this,
            namedArgs.concat(argPadding).concat([variadicArgs])
          );
        };
      }
    },
    ellipsisFun = function (firstArg, ellipsis) {
      return [firstArg, ellipsis];
    };
  variadic(ellipsisFun)("one", "two", "three"); // Returns ["one", ["two", "three"]]
})();


/*Expected DCG Output
{ '(test16.js:1:1:31:5)':
   [ '(test16.js:1:2:31:2)' ],
  '(test16.js:30:3:30:24)':
   [ '(test16.js:3:16:26:6)' ],
  '(test16.js:30:3:30:47)':
   [ '(test16.js:13:16:24:10)' ],
  '(test16.js:15:25:15:63)': [ 'call (Native)' ],
  '(test16.js:16:40:16:80)': [ 'max (Native)' ],
  '(test16.js:17:26:17:61)': [ 'Array (Native)' ],
  '(test16.js:18:28:18:64)': [ 'call (Native)' ],
  '(test16.js:22:13:22:41)': [ 'concat (Native)' ],
  '(test16.js:22:13:22:64)': [ 'concat (Native)' ],
  '(test16.js:20:18:23:12)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(test16.js:27:19:29:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test16.js:1:1:31:5)':
   [ 'anon (test16.js:1:2:31:2)' ],
  'anon (test16.js:30:3:30:24)':
   [ 'anon (test16.js:3:16:26:6)' ],
  'anon (test16.js:30:3:30:47)':
   [ 'anon (test16.js:13:16:24:10)' ],
  'anon (test16.js:15:25:15:63)':
   [ 'call (Native)(test16.js:15:25:15:63)' ],
  'anon (test16.js:16:40:16:80)':
   [ 'max (Native)(test16.js:16:40:16:80)' ],
  'anon (test16.js:17:26:17:61)':
   [ 'Array (Native)(test16.js:17:26:17:61)' ],
  'anon (test16.js:18:28:18:64)':
   [ 'call (Native)(test16.js:18:28:18:64)' ],
  'anon (test16.js:22:13:22:41)':
   [ 'concat (Native)(test16.js:22:13:22:41)' ],
  'anon (test16.js:22:13:22:64)':
   [ 'concat (Native)(test16.js:22:13:22:64)' ],
  'anon (test16.js:20:18:23:12)':
   [ 'apply (Native)(test16.js:20:18:23:12)' ],
  'apply (Native) (test16.js:20:18:23:12)':
   [ 'anon (test16.js:27:19:29:6)' ] }
*/