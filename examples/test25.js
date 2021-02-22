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


/*Expected Output
{
  '(test25.js:1:1:19:5)': [
    '(test25.js:1:2:19:2)'
  ],
  '(test25.js:18:3:18:27)': [
    '(test25.js:2:3:4:4)'
  ],
  '(test25.js:3:5:3:11)': [
    '(test25.js:6:5:8:6)'
  ],
  '(test25.js:7:7:7:43)': [ 'log (Native)' ]
}
*/