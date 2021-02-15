(function(){
var user = {
        firstName: "John"
};

var user2 = {
        firstName: "Catana"
};

function name(){
        return this.firstName
}
user["getName"] =  name
user2["getName"] =  name

if (user["getName"] === user2["getName"]){
        user["getName"]();
}
})()