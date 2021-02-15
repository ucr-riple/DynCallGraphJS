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
