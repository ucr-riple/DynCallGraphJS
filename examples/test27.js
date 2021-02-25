function foo(x) {
  return x;
}
Function.prototype.apply.call(foo, undefined, ["hi I am x"]);


/*Expected DCG Output
{ '(test27.js:4:1:4:61)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test27.js:1:1:3:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test27.js:4:1:4:61)':
   [ 'call (Native)(test27.js:4:1:4:61)' ],
  'call (Native) (test27.js:4:1:4:61)':
   [ 'foo (test27.js:1:1:3:2)' ] }
*/