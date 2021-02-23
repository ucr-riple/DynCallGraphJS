(function () {
  function foo(x) {
    return x;
  }
  function bar() {
    return;
  }
  for (var i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      foo(i);
    } else {
      bar();
    }
  }
})();


/*Expected Output
{ '(test69.js:1:1:15:5)':
   [ '(test69.js:1:2:15:2)' ],
  '(test69.js:10:7:10:13)':
   [ '(test69.js:2:3:4:4)' ],
  '(test69.js:12:7:12:12)':
   [ '(test69.js:5:3:7:4)' ] }
*/