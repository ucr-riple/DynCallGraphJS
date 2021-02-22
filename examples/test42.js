var user = {
  firstName: "John",
};

function func() {
  return this.firstName;
}
var funcUser = Function.prototype.bind.call(func, user);
funcUser();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test42.js:8:16:8:56)': [ 'call (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test42.js:9:1:9:11)': [ 'bound func (Native)' ],
  'bound func (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test42.js:5:1:7:2)' ] }
*/