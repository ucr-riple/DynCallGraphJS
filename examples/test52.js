function main(propName){
        var obj= {
        MyName:function(){
                return "John Doe"
        },
        MyPhone:function(){
                return "123-456-7890"
        }
}
var arr = ["MyName"]
obj[arr[0]]() //Get
var retPropName = function(){
        return "MyPhone"
}
obj[retPropName()](); //Function Return
obj["My"+"Name"](); //Binary Operation
obj[propName](); //Parameter Pass
obj[1===1?"MyName":"MyPhone"] //Multiple Constants
for(key in obj){ //For-In Loop
        obj[key](); 
}
}
main("MyPhone")

/*Expected Output
{ '(test52.js:23:1:23:16)':
   [ '(test52.js:1:1:22:2)' ],
  '(test52.js:11:1:11:14)':
   [ '(test52.js:3:16:5:10)' ],
  '(test52.js:15:5:15:18)':
   [ '(test52.js:12:19:14:2)' ],
  '(test52.js:15:1:15:21)':
   [ '(test52.js:6:17:8:10)' ],
  '(test52.js:16:1:16:19)':
   [ '(test52.js:3:16:5:10)' ],
  '(test52.js:17:1:17:16)':
   [ '(test52.js:6:17:8:10)' ],
  '(test52.js:20:9:20:19)':
   [ '(test52.js:3:16:5:10)',
     '(test52.js:6:17:8:10)' ] }
*/