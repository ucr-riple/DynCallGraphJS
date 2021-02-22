var obj = {};
obj.foo = Math.max;
obj["f"+"oo"](3,4);


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test75.js:3:1:3:19)': [ 'max (Native)' ] }
*/