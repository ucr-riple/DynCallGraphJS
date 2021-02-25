var myslice = Array.prototype.slice;
var animals = ["ant", "bison", "camel", "duck", "elephant"];
myslice.call(animals, 0, 1);


/*Expected DCG Output
{
  '(test13.js:3:1:3:28)': [ 'call (Native)' ]
}
*/

/*Expected DCG2 Output
{ 'global (test13.js:3:1:3:28)':
   [ 'call (Native)(test13.js:3:1:3:28)' ] }
*/