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
{ '(test19.js:11:1:11:11)':
   [ '(test19.js:1:1:7:8)' ],
  '(test19.js:3:16:3:21)':
   [ '(test19.js:8:1:10:8)' ],
  '(test19.js:9:16:9:23)':
   [ '(test19.js:1:1:7:8)' ] }
*/