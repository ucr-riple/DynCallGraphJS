function Book(type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
    return this.type + " written by " + this.author;
  };
}
var book = new Book("Fiction", "Peter King");
book.getDetails(); // => Fiction written by Peter King
