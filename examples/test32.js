var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.unshift(function () {
  return "z";
});
arrayOfFunction[0]();


/*Expected Output
{ '(test32.js:9:1:11:3)': [ 'unshift (Native)' ],
  '(test32.js:12:1:12:21)':
   [ '(test32.js:9:25:11:2)' ] }
*/