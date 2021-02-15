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
