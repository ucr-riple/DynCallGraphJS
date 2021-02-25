var x= {}
x.q=function(){
        return;
}
with(x)
{q();}

/*Expected DCG Output
{ '(test73.js:6:2:6:5)':
   [ '(test73.js:2:5:4:2)' ] }
*/

/*Expected DCG2 Output
{ 'global (test73.js:6:2:6:5)':
   [ 'anon (test73.js:2:5:4:2)' ] }
*/