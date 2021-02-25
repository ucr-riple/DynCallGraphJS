"use strict";

var target = {
  message: "hello",
  messageFun: function () {
    return this.message;
  },
};
var handler1 = {};
var proxy1 = new Proxy(target, handler1);
proxy1.messageFun();


/*Expected DCG Output
{ '(test89.js:10:14:10:41)': [ 'Proxy (Native)' ],
  '(test89.js:11:1:11:20)':
   [ '(test89.js:5:15:7:4)' ] }
*/

/*Expected DCG2 Output
{ 'global (test89.js:10:14:10:41)':
   [ 'Proxy (Native)(test89.js:10:14:10:41)' ],
  'global (test89.js:11:1:11:20)':
   [ 'anon (test89.js:5:15:7:4)' ] }
*/