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


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:1:1:31:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:1:2:31:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:30:3:30:24)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:3:16:26:6)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:30:3:30:47)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:13:16:24:10)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:15:25:15:63)': [ 'call (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:16:40:16:80)': [ 'max (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:17:26:17:61)': [ 'Array (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:18:28:18:64)': [ 'call (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:22:13:22:41)': [ 'concat (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:22:13:22:64)': [ 'concat (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:20:18:23:12)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test16.js:27:19:29:6)' ] }
*/