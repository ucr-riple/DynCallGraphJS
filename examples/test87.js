function Person(last, age, eye) {
  this.firstName = function () {
    return "John";
  };
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.name = function () {
  return this.firstName() + " " + this.lastName;
};
var JD = new Person.prototype.constructor("Doe", 50, "blue");
JD.name();
