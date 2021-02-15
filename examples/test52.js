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
obj[1=1?"MyName":"MyPhone"] //Multiple Constants
for(key in obj){ //For-In Loop
        obj[key](); 
}
}
main("MyPhone")