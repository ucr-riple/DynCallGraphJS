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


/*Expected Output
{ '(test87.js:13:10:13:61)':
   [ '(test87.js:1:1:8:2)' ],
  '(test87.js:14:1:14:10)':
   [ '(test87.js:10:25:12:2)' ],
  '(test87.js:11:10:11:26)':
   [ '(test87.js:2:20:4:4)' ] }
*/