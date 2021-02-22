(function (mod) {
  function foo(modId) {
    mod[modId].call(this, function () {
      return "x";
    });
  }
  return foo(0);
})([
  function (newcl) {
    newcl();
  },
]);


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test60.js:1:1:12:3)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test60.js:1:2:8:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test60.js:7:10:7:16)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test60.js:2:3:6:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test60.js:3:5:5:7)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test60.js:9:3:11:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test60.js:10:5:10:12)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test60.js:3:27:5:6)' ] }
*/