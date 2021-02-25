var user = {
  firstName: "John",
  lastName: "Doe",
};

var getFullName = function (user) {
  return user.firstName + " " + user.lastName;
};

var getFullNameProxy = new Proxy(getFullName, {
  apply: function (target, thisArg, args) {
    return target(args).toUpperCase();
  },
});
getFullNameProxy(user);


/*Expected DCG Output
{ '(test86.js:10:24:14:3)': [ 'Proxy (Native)' ],
  '(test86.js:15:1:15:23)': [ 'anon (Native)' ],
  'anon (Native)':
   [ '(test86.js:11:10:13:4)' ],
  '(test86.js:12:12:12:24)':
   [ '(test86.js:6:19:8:2)' ],
  '(test86.js:12:12:12:38)': [ 'toUpperCase (Native)' ] }
*/

/*Expected DCG2 Output
{ 'global (test86.js:10:24:14:3)':
   [ 'Proxy (Native)(test86.js:10:24:14:3)' ],
  'global (test86.js:15:1:15:23)':
   [ ' (Native)(test86.js:15:1:15:23)' ],
  'anon (Native) (test86.js:15:1:15:23)':
   [ 'anon (test86.js:11:10:13:4)' ],
  'anon (test86.js:12:12:12:24)':
   [ 'anon (test86.js:6:19:8:2)' ],
  'anon (test86.js:12:12:12:38)':
   [ 'toUpperCase (Native)(test86.js:12:12:12:38)' ] }
*/