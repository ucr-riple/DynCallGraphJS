(function (arr) {
  var obj = {
    MyNames: {
      NickName: function () {
        return "Nimmo";
      },
      FullName: function () {
        return "Madhurima";
      },
    },
    MyPhone: function () {
      return "XXX-XXX-XXXX";
    },
  };
  obj.MyNames["NickName"]();
})();


/*Expected Output
{ '(test71.js:1:1:16:5)':
   [ '(test71.js:1:2:16:2)' ],
  '(test71.js:15:3:15:28)':
   [ '(test71.js:4:17:6:8)' ] }
*/