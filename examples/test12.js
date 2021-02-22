function Book(type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
    return this.type + " written by " + this.author;
  };
}
var book = new Book("Fiction", "Peter King");
book.getDetails(); // => Fiction written by Peter King


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test12.js:8:12:8:45)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test12.js:1:1:7:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test12.js:9:1:9:18)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test12.js:4:21:6:4)'
  ]
}
*/