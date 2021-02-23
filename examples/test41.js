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
{ '(test41.js:1:1:14:5)':
   [ '(test41.js:1:2:14:2)' ],
  '(test41.js:12:18:12:33)': [ 'bind (Native)' ],
  '(test41.js:13:3:13:13)': [ 'bound func (Native)' ],
  'bound func (Native)':
   [ '(test41.js:9:3:11:4)' ],
  '(test41.js:13:3:13:15)':
   [ '(test41.js:4:15:6:6)' ] }
*/