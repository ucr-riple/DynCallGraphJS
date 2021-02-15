var user = {
  firstName: "John",
  lastName: "Doe",
};

var getFullName = function (user) {
  return user.firstName + " " + user.lastName;
};

var getFullNameProxy = new Proxy(getFullName, {
  apply: function (target, thisArg, args) {
    return target(args).toUpperCase();
  },
});
getFullNameProxy(user);
