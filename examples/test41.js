(function () {
  var user = {
    firstName: "John",
    fullName: function () {
      return this.firstName;
    },
  };

  function func() {
    return this.fullName;
  }
  var funcUser = func.bind(user);
  funcUser()();
})();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:1:1:14:5)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:1:2:14:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:12:18:12:33)': [ 'bind (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:13:3:13:13)': [ 'bound func (Native)' ],
  'bound func (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:9:3:11:4)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:13:3:13:15)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test41.js:4:15:6:6)' ] }
*/