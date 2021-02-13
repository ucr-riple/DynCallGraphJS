var rect = { width: 20, height: 10 };
rect.getArea = function () {
  return this.width * this.height;
};
var func = rect.getArea;
func();
