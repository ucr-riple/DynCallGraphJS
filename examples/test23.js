function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

var john = new Person("John", "Doe");
john.name();
