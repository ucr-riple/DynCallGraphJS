function bar() {
  return [
    function () {
      return 0;
    },
    function () {
      return 1;
    },
  ];
}
var foo = function () {
  return new bar()[0];
};
foo()();


/*Expected Output
{
  '(test3.js:14:1:14:6)': [
    '(test3.js:11:11:13:2)'
  ],
  '(test3.js:12:10:12:19)': [
    '(test3.js:1:1:10:2)'
  ],
  '(test3.js:14:1:14:8)': [
    '(test3.js:3:5:5:6)'
  ]
}
*/