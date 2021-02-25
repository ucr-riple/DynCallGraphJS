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


/*Expected DCG Output
{ '(test43.js:8:16:8:28)': [ 'bind (Native)' ],
  '(test43.js:10:1:10:4)': [ 'bound anon (Native)' ],
  'bound anon (Native)':
   [ '(test43.js:5:9:7:2)' ],
  '(test43.js:12:1:12:14)': [ 'apply (Native)' ],
  'apply (Native)':
   [ '(test43.js:5:9:7:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test43.js:8:16:8:28)':
   [ 'bind (Native)(test43.js:8:16:8:28)' ],
  'global (test43.js:10:1:10:4)':
   [ 'bound anon (Native)(test43.js:10:1:10:4)' ],
  'bound anon (Native) (test43.js:10:1:10:4)':
   [ 'anon (test43.js:5:9:7:2)' ],
  'global (test43.js:12:1:12:14)':
   [ 'apply (Native)(test43.js:12:1:12:14)' ],
  'apply (Native) (test43.js:12:1:12:14)':
   [ 'anon (test43.js:5:9:7:2)' ] }
*/