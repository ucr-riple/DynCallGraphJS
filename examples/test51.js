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
