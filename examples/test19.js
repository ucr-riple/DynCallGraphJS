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