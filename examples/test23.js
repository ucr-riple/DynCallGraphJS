function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

var john = new Person("John", "Doe");
john.name();


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test23.js:10:12:10:37)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test23.js:1:1:4:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test23.js:11:1:11:12)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test23.js:6:25:8:2)' ] }
*/