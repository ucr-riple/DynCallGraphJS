(function (arr) {
  var obj = arr[0],
    y = 0;
  var def = ["ok"];
  var newObj = {};
  newObj[def[0] + "With"] = obj.MyPhone;
  newObj["okWith"]();
})([
  {
    MyName: function () {
      return "Nimmo";
    },
    MyPhone: function () {
      return "XXX-XXX-XXXX";
    },
  },
]);


/*Expected Output
{ '(test70.js:1:1:17:3)':
   [ '(test70.js:1:2:8:2)' ],
  '(test70.js:7:3:7:21)':
   [ '(test70.js:13:14:15:6)' ] }
*/