(function(){
function foo(){
        return new Function('with({q:function(){return;}}){q()}')
}

x = foo();
x();
})();


/*Expected Output
{ '(test79.js:1:1:8:5)':
   [ '(test79.js:1:2:8:2)' ],
  '(test79.js:6:5:6:10)':
   [ '(test79.js:2:1:4:2)' ],
  '(test79.js:3:16:3:66)': [ 'Function (Native)' ],
  '(test79.js:7:1:7:4)':
   [ '(evalIndirect(test79.js:3:16:3:66):1:2:1:51)' ],
  '(evalIndirect(test79.js:3:16:3:66):1:45:1:48)':
   [ '(evalIndirect(test79.js:3:16:3:66):1:23:1:42)' ] }
*/