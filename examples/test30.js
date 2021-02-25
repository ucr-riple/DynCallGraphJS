(function () {
  var fns = arguments;
  fns[0]["y"]();
})({
  y: function () {
    return "y";
  },
  z: function () {
    return "z";
  },
});


/*Expected DCG Output
{ '(test30.js:1:1:11:3)':
   [ '(test30.js:1:2:4:2)' ],
  '(test30.js:3:3:3:16)':
   [ '(test30.js:5:6:7:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test30.js:1:1:11:3)':
   [ 'anon (test30.js:1:2:4:2)' ],
  'anon (test30.js:3:3:3:16)':
   [ 'anon (test30.js:5:6:7:4)' ] }
*/