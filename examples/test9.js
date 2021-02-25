var arrayOfFunction = [
  function () {
    return "Inside First function";
  },

  function () {
    return "Inside Second function";
  },
];
arrayOfFunction[0]();


/*Expected DCG Output
{
  '(test9.js:10:1:10:21)': [ '(test9.js:2:3:4:4)' ]
}
*/

/*Expected DCG2 Output
{ 'global (test9.js:10:1:10:21)':
   [ 'anon (test9.js:2:3:4:4)' ] }
*/