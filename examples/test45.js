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


/*Expected Output
{ '(test45.js:1:1:15:5)':
   [ '(test45.js:1:2:15:2)' ],
  '(test45.js:14:1:14:10)':
   [ '(test45.js:11:1:13:2)' ],
  '(test45.js:12:1:12:14)':
   [ '(test45.js:4:14:6:8)' ],
  '(test45.js:5:16:5:23)':
   [ '(test45.js:8:1:10:2)' ] }
*/