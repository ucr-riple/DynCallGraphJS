(function () {
  var obj = {
    foo: function () {
      var x = obj["bar"];
      return x;
    },
    bar: function () {
      return "bar";
    },
  };
  function main() {
    var y = obj["fo" + "o"];
    y.call(this);
  }
  main();
})();


/*Expected DCG Output
{ '(test26.js:1:1:16:5)':
   [ '(test26.js:1:2:16:2)' ],
  '(test26.js:15:3:15:9)':
   [ '(test26.js:11:3:14:4)' ],
  '(test26.js:13:5:13:17)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test26.js:3:10:6:6)' ] }
*/

/*Expected DCG2 Output
{ 'global (test26.js:1:1:16:5)':
   [ 'anon (test26.js:1:2:16:2)' ],
  'anon (test26.js:15:3:15:9)':
   [ 'main (test26.js:11:3:14:4)' ],
  'main (test26.js:13:5:13:17)':
   [ 'call (Native)(test26.js:13:5:13:17)' ],
  'call (Native) (test26.js:13:5:13:17)':
   [ 'anon (test26.js:3:10:6:6)' ] }
*/