(function () {
  var fns = arguments;
  fns[0][0]();
})([
  function () {
    return "y";
  },
  function () {
    return "z";
  },
]);


/*Expected Output
{ '(test31.js:1:1:11:3)':
   [ '(test31.js:1:2:4:2)' ],
  '(test31.js:3:3:3:14)':
   [ '(test31.js:5:3:7:4)' ] }
*/