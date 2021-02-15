(function () {
  function show(args) {
    args();
  }
  var arrayOfFunction = [
    function () {
      console.log("Inside First function");
    },

    function () {
      console.log("Inside Second function");
    },

    function () {
      console.log("Inside Third function");
    },
  ];
  show(arrayOfFunction[0]);
})();
