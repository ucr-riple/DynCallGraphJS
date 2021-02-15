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
