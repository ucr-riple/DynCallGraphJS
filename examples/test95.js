(function () {
  function foo() {
    return new Function(
      "with( {log: 'log',getlog: function () {return this.log;}}) { return getlog;}"
    );
  }
  var x = foo();
  var y = x();
  y();
  var z = function () {
    return "z";
  };
  function bar() {
    return new Function("return(" + z + ")");
  }
  var next = bar();
  var final = next();
  final();
})();
