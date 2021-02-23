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
var x = function () {
  return 1;
};
var y = x();
arrayOfFunction[y]();


/*Expected Output
{ '(test35.js:17:9:17:12)':
   [ '(test35.js:14:9:16:2)' ],
  '(test35.js:18:1:18:21)':
   [ '(test35.js:6:3:8:4)' ],
  '(test35.js:7:5:7:42)': [ 'bound consoleCall (Native)' ] }
*/