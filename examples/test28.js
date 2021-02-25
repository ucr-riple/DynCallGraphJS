(function () {
  var obj = {
    bar: function () {
      return "bar";
    },
    foo: function (x) {
      return [x];
    },
  };
  function main() {
    var y = obj["fo" + "o"].apply(this, [obj["bar"]]);
    y = y[y.length - 1];
    y.apply(this);
  }
  main();
})();


/*Expected DCG Output
{ '(test28.js:1:1:16:5)':
   [ '(test28.js:1:2:16:2)' ],
  '(test28.js:15:3:15:9)':
   [ '(test28.js:10:3:14:4)' ],
  '(test28.js:11:13:11:54)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(test28.js:6:10:8:6)',
     '(test28.js:3:10:5:6)' ],
  '(test28.js:13:5:13:18)': [ 'apply (Native)' ] }
*/

/*Expected DCG2 Output
{ 'global (test28.js:1:1:16:5)':
   [ 'anon (test28.js:1:2:16:2)' ],
  'anon (test28.js:15:3:15:9)':
   [ 'main (test28.js:10:3:14:4)' ],
  'main (test28.js:11:13:11:54)':
   [ 'apply (Native)(test28.js:11:13:11:54)' ],
  'apply (Native)':
   [ 'anon (test28.js:6:10:8:6)',
     'anon (test28.js:3:10:5:6)' ],
  'main (test28.js:13:5:13:18)':
   [ 'apply (Native)(test28.js:13:5:13:18)' ] }
*/