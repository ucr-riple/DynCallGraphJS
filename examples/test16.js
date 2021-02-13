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
