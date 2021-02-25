var user = {
  firstName: "John",
};

function func() {
  return this.firstName;
}
var funcUser = Function.prototype.bind.call(func, user);
funcUser();


/*Expected DCG Output
{ '(test42.js:8:16:8:56)': [ 'call (Native)' ],
  '(test42.js:9:1:9:11)': [ 'bound func (Native)' ],
  'bound func (Native)':
   [ '(test42.js:5:1:7:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test42.js:8:16:8:56)':
   [ 'call (Native)(test42.js:8:16:8:56)' ],
  'global (test42.js:9:1:9:11)':
   [ 'bound func (Native)(test42.js:9:1:9:11)' ],
  'bound func (Native) (test42.js:9:1:9:11)':
   [ 'func (test42.js:5:1:7:2)' ] }
*/