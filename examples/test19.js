function foo(quote){
        if(quote=="bar"){
        return bar();}
        else{
                return;
        }
      }
function bar(){
        return foo("");
      }
foo("bar");


/*Exoected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:11:1:11:11)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:1:1:7:8)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:3:16:3:21)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:8:1:10:8)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:9:16:9:23)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test19.js:1:1:7:8)' ] }
*/