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
{ '(/home/XYZ/research/DynCallGraphJS/examples/test20.js:11:1:11:12)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test20.js:7:1:9:2)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test20.js:8:27:8:41)': [ 'call (Native)' ],
  'call (Native)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test20.js:4:1:6:2)' ] }
*/