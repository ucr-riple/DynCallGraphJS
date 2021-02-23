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


/*Expected Output
{ '(test89.js:10:14:10:41)': [ 'Proxy (Native)' ],
  '(test89.js:11:1:11:20)':
   [ '(test89.js:5:15:7:4)' ] }
*/