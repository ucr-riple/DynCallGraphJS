var rect = { width: 20, height: 10 };
rect.getArea = function () {
  return this.width * this.height;
};
var func = rect.getArea;
func();


/*Expected Output
{
  '(/home/XYZ/research/DynCallGraphJS/examples/test14.js:6:1:6:7)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test14.js:2:16:4:2)'
  ]
}
*/