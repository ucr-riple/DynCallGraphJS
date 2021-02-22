var scope = function () {
  return "global";
}; 
function checkscope() {
  var scope = function () {
    return "local";
  }; 
  scope();
}
checkscope();
scope();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test47.js:10:1:10:13)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test47.js:4:1:9:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test47.js:8:3:8:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test47.js:5:15:7:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test47.js:11:1:11:8)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test47.js:1:13:3:2)' ] }
*/