var user = {
  firstName: "John",
};

var x = function () {
  return this.firstName;
};
var funcUser = x.bind(user);
var y = funcUser;
y();
var z = funcUser;
z.apply(this);
