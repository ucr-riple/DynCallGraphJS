(function () {
  var arrayOfFunction = [
    function () {
      return "x";
    },
    function () {
      return "y";
    },
  ];
  arrayOfFunction.shift()();
  arrayOfFunction[0]();
})();
