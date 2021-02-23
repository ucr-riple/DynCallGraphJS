var arrayOfFunction = [
  function () {
    return "x";
  },
  function () {
    return "y";
  },
];
arrayOfFunction.push(function () {
  return "z";
});
arrayOfFunction[2].call(this);


/*Expected Output
{ '(test38.js:9:1:11:3)': [ 'push (Native)' ],
  '(test38.js:12:1:12:30)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test38.js:9:22:11:2)' ] }
*/