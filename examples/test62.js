(function () {
  var x = function () {
    return 2;
  };
  var y = function () {
    return x();
  };
  y();
})();


/*Expected Output
{ '(test62.js:1:1:9:5)':
   [ '(test62.js:1:2:9:2)' ],
  '(test62.js:8:3:8:6)':
   [ '(test62.js:5:11:7:4)' ],
  '(test62.js:6:12:6:15)':
   [ '(test62.js:2:11:4:4)' ] }
*/