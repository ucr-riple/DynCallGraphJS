function foo(){
        return;
}
function bar(){
        return;
}
function main(temp){
        temp=="foo"?foo():bar.call(this);
}

main("bar")


/*Expected Output
{ '(test20.js:11:1:11:12)':
   [ '(test20.js:7:1:9:2)' ],
  '(test20.js:8:27:8:41)': [ 'call (Native)' ],
  'call (Native)':
   [ '(test20.js:4:1:6:2)' ] }
*/