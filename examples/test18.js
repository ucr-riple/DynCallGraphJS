function a(x) {
  function b(y) {
    return x + y;
  }
  return b;
}
a(3)(4);


/*Expected Output
{ '(test18.js:7:1:7:5)':
   [ '(test18.js:1:1:6:2)' ],
  '(test18.js:7:1:7:8)':
   [ '(test18.js:2:3:4:4)' ] }
*/