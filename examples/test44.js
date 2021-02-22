var user = {
  firstName: "John",
};

var x = function () {
  return this.firstName;
}.bind(this);
x();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test44.js:5:9:7:13)': [ 'bind (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test44.js:8:1:8:4)': [ 'bound anon (Native)' ],
  'bound anon (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test44.js:5:9:7:2)' ] }
*/