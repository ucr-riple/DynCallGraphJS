eval("var x = function(){return 'ok';}");
x();

/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test50.js:2:1:2:4)':
   [ '(eval(/home/renzo/research/DynCallGraphJS/examples/test50.js:1:6:1:40):1:9:1:33)' ] }
*/