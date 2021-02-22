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
{ '(/home/renzo/research/DynCallGraphJS/examples/test71.js:1:1:16:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test71.js:1:2:16:2)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test71.js:15:3:15:28)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test71.js:4:17:6:8)' ] }
*/