var rect = { width: 20, height: 10 };
rect.getArea = function () {
  return this.width * this.height;
};
var func = rect.getArea;
func();


/*Expected DCG Output
{
  '(test14.js:6:1:6:7)': [
    '(test14.js:2:16:4:2)'
  ]
}
*/

/*Expected DCG2 Output
{ 'global (test14.js:6:1:6:7)':
   [ 'anon (test14.js:2:16:4:2)' ] }
*/