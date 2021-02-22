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


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test86.js:10:24:14:3)': [ 'Proxy (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test86.js:15:1:15:23)': [ 'anon (Native)' ],
  'anon (Native)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test86.js:11:10:13:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test86.js:12:12:12:24)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test86.js:6:19:8:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test86.js:12:12:12:38)': [ 'toUpperCase (Native)' ] }
*/