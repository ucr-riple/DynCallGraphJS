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


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test95.js:1:1:19:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test95.js:1:2:19:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:7:11:7:16)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test95.js:2:3:6:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:3:12:5:6)': [ 'Function (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:8:11:8:14)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test95.js:3:12:5:6):1:2:1:93)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:9:3:9:6)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test95.js:3:12:5:6):1:41:1:71)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:16:14:16:19)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test95.js:13:3:15:4)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:14:12:14:45)': [ 'Function (Native)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:17:15:17:21)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test95.js:14:12:14:45):1:2:17:33)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test95.js:18:3:18:10)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test95.js:14:12:14:45):1:22:17:30)' ],
  'anon (Native)':
   [ '(evalIndirect(/home/renzo/research/DynCallGraphJS/examples/test95.js:14:12:14:45):iid177)' ] }
*/