var functionContainer = function () {
  return {
    function1: function () {
      return;
    },

    function2: function () {
      return;
    },
  };
};
var x = functionContainer();
x.function2();


/*Expected DCG Output
{ '(test93.js:12:9:12:28)':
   [ '(test93.js:1:25:11:2)' ],
  '(test93.js:13:1:13:14)':
   [ '(test93.js:7:16:9:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test93.js:12:9:12:28)':
   [ 'anon (test93.js:1:25:11:2)' ],
  'global (test93.js:13:1:13:14)':
   [ 'anon (test93.js:7:16:9:6)' ] }
*/