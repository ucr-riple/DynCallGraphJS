function foo(x) {
  return x;
}
Function.prototype.apply.call(foo, undefined, ["hi I am x"]);


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test27.js:4:1:4:61)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test27.js:1:1:3:2)' ] }
*/