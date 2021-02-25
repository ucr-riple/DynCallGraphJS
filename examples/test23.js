function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

var john = new Person("John", "Doe");
john.name();


/*Expected DCG Output
{ '(test23.js:10:12:10:37)':
   [ '(test23.js:1:1:4:2)' ],
  '(test23.js:11:1:11:12)':
   [ '(test23.js:6:25:8:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test23.js:10:12:10:37)':
   [ 'Person (test23.js:1:1:4:2)' ],
  'global (test23.js:11:1:11:12)':
   [ 'anon (test23.js:6:25:8:2)' ] }
*/