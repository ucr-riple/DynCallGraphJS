var funName = new Function(
  "return function () {return {foo: function foo() {return('foo called');},}}"
)();
funName()["foo"]();