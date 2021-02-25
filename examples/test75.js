var obj = {};
obj.foo = Math.max;
obj["f"+"oo"](3,4);


/*Expected DCG Output
{ '(test75.js:3:1:3:19)': [ 'max (Native)' ] }
*/

/*Expected DCG2 Output
{ 'global (test75.js:3:1:3:19)':
   [ 'max (Native)(test75.js:3:1:3:19)' ] }
*/