function foo() {
        return;
}
function bar() {
        return;
}
var arr = ["x"];
var result={}

function main() {
        var result = act(arr,foo)
        return result;
}
function act(a,f){
        
        a.forEach(function (element) {
                return result[element] = bar;
        });
        return result;
}
main();
result["x"]()

/*Expected DCG Output
{ '(test74.js:21:1:21:7)':
   [ '(test74.js:10:1:13:2)' ],
  '(test74.js:11:22:11:34)':
   [ '(test74.js:14:1:20:2)' ],
  '(test74.js:16:9:18:11)': [ 'forEach (Native)' ],
  'forEach (Native)':
   [ '(test74.js:16:19:18:10)' ],
  '(test74.js:22:1:22:14)':
   [ '(test74.js:4:1:6:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test74.js:21:1:21:7)':
   [ 'main (test74.js:10:1:13:2)' ],
  'main (test74.js:11:22:11:34)':
   [ 'act (test74.js:14:1:20:2)' ],
  'act (test74.js:16:9:18:11)':
   [ 'forEach (Native)(test74.js:16:9:18:11)' ],
  'forEach (Native) (test74.js:16:9:18:11)':
   [ 'anon (test74.js:16:19:18:10)' ],
  'global (test74.js:22:1:22:14)':
   [ 'bar (test74.js:4:1:6:2)' ] }
*/