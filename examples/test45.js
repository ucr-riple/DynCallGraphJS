(function(){
  
var obj ={
        foo: function(quote){
        return quote();
      }
}      
function bar(){
        return "bar called"
}
function main(o){  
o["foo"](bar)
}
main(obj)
})()


