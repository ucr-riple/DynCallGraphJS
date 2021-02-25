var object1 = {};
var fun = function () {
  return "fun";
};
Object.defineProperties(object1, {
  property1: {
    value: function () {
      return "no";
    },
    writable: false,
  },
  property2: {
    value: fun,
    writable: true,
  },
});
object1.property2();


/*Expected DCG Output
{ '(test80.js:5:1:16:3)': [ 'defineProperties (Native)' ],
  '(test80.js:17:1:17:20)':
   [ '(test80.js:2:11:4:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test80.js:5:1:16:3)':
   [ 'defineProperties (Native)(test80.js:5:1:16:3)' ],
  'global (test80.js:17:1:17:20)':
   [ 'anon (test80.js:2:11:4:2)' ] }
*/