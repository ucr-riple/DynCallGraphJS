(function () {
  function foo() {
    var x = function () {};
    var y = function () {
      x();
    };
    return y;
  }
  foo()();
})();


/*Expected Output
{ '(test64.js:1:1:10:5)':
   [ '(test64.js:1:2:10:2)' ],
  '(test64.js:9:3:9:8)':
   [ '(test64.js:2:3:8:4)' ],
  '(test64.js:9:3:9:10)':
   [ '(test64.js:4:13:6:6)' ],
  '(test64.js:5:7:5:10)':
   [ '(test64.js:3:13:3:27)' ] }
*/