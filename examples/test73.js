var x= {}
x.q=function(){
        return;
}
with(x)
{q();}

/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test73.js:6:2:6:5)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test73.js:2:5:4:2)' ] }
*/