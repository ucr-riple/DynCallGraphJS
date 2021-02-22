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
{ '(/home/renzo/research/DynCallGraphJS/examples/test87.js:13:10:13:61)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test87.js:1:1:8:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test87.js:14:1:14:10)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test87.js:10:25:12:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test87.js:11:10:11:26)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test87.js:2:20:4:4)' ] }
*/