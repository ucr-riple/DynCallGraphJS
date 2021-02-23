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


/*Expected Output
{ '(test49.js:1:1:19:5)':
   [ '(test49.js:1:2:19:2)' ],
  '(test49.js:17:9:17:26)':
   [ '(test49.js:10:1:12:2)' ] }
*/