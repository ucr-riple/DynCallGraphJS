function main() {
  var obj = {
    MyName: function () {
      return "John Doe";
    },
    MyPhone: function () {
      return "123-456-7890";
    },
  };
  obj["My" + "Name"]();
  obj["MyPhone"]();
}
main();


/*Expected Output
{ '(test51.js:13:1:13:7)':
   [ '(test51.js:1:1:12:2)' ],
  '(test51.js:10:3:10:23)':
   [ '(test51.js:3:13:5:6)' ],
  '(test51.js:11:3:11:19)':
   [ '(test51.js:6:14:8:6)' ] }
*/