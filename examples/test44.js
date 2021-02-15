var user = {
  firstName: "John",
};

var x = function () {
  return this.firstName;
}.bind(this);
x();
