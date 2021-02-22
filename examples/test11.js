function foo(x) {
  return x;
}
function test() {
  try {
    foo(4);
    try {
      foo(3);
    } finally {
      foo(2);
    }
  } finally {
    foo(1);
  }
}
test();


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:16:1:16:7)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:4:1:15:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:6:5:6:11)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:1:1:3:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:8:7:8:13)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:1:1:3:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:10:7:10:13)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:1:1:3:2)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:13:5:13:11)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test11.js:1:1:3:2)'
  ]
}
*/