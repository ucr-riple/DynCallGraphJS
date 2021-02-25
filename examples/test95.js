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


/*Expected DCG Output
{ '(test95.js:1:1:19:5)':
   [ '(test95.js:1:2:19:2)' ],
  '(test95.js:7:11:7:16)':
   [ '(test95.js:2:3:6:4)' ],
  '(test95.js:3:12:5:6)': [ 'Function (Native)' ],
  '(test95.js:8:11:8:14)':
   [ '(evalIndirect(test95.js:3:12:5:6):1:2:1:93)' ],
  '(test95.js:9:3:9:6)':
   [ '(evalIndirect(test95.js:3:12:5:6):1:41:1:71)' ],
  '(test95.js:16:14:16:19)':
   [ '(test95.js:13:3:15:4)' ],
  '(test95.js:14:12:14:45)': [ 'Function (Native)' ],
  '(test95.js:17:15:17:21)':
   [ '(evalIndirect(test95.js:14:12:14:45):1:2:17:33)' ],
  '(test95.js:18:3:18:10)':
   [ '(evalIndirect(test95.js:14:12:14:45):1:22:17:30)' ],
  'anon (Native)':
   [ '(evalIndirect(test95.js:14:12:14:45):iid177)' ] }
*/

/*Expected DCG2 Output
{ 'global (test95.js:1:1:19:5)':
   [ 'anon (test95.js:1:2:19:2)' ],
  'anon (test95.js:7:11:7:16)':
   [ 'foo (test95.js:2:3:6:4)' ],
  'foo (test95.js:3:12:5:6)':
   [ 'Function (Native)(test95.js:3:12:5:6)' ],
  'anon (test95.js:8:11:8:14)':
   [ 'anon (evalIndirect(test95.js:3:12:5:6):1:2:1:93)' ],
  'anon (test95.js:9:3:9:6)':
   [ 'anon (evalIndirect(test95.js:3:12:5:6):1:41:1:71)' ],
  'anon (test95.js:16:14:16:19)':
   [ 'bar (test95.js:13:3:15:4)' ],
  'bar (test95.js:14:12:14:45)':
   [ 'Function (Native)(test95.js:14:12:14:45)' ],
  'anon (test95.js:17:15:17:21)':
   [ 'anon (evalIndirect(test95.js:14:12:14:45):1:2:17:33)' ],
  'anon (test95.js:18:3:18:10)':
   [ 'anon (evalIndirect(test95.js:14:12:14:45):1:22:17:30)' ],
  'Unmodelled (Native)':
   [ 'anon (evalIndirect(test95.js:14:12:14:45):iid177)' ] }
*/