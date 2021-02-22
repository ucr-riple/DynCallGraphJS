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
{ '(/home/renzo/research/DynCallGraphJS/examples/test89.js:10:14:10:41)': [ 'Proxy (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test89.js:11:1:11:20)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test89.js:5:15:7:4)' ] }
*/