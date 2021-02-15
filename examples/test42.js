var user = {
  firstName: "John",
};

function func() {
  return this.firstName;
}
var funcUser = Function.prototype.bind.call(func, user);
funcUser();
