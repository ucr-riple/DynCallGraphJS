var obj = {
  x: "xyz",
};
function bar(i) {
  return i;
}

function foo() {
  loop1: for (el in obj) {
    y = bar(el);
  }
}
foo();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test61.js:13:1:13:6)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test61.js:8:1:12:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test61.js:10:9:10:16)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test61.js:4:1:6:2)' ] }
*/