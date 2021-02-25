eval("var x = function(){return 'ok';}");
x();

/*Expected DCG Output
{ '(test50.js:2:1:2:4)':
   [ '(eval(test50.js:1:6:1:40):1:9:1:33)' ] }
*/

/*Expected DCG2 Output
{ 'global (test50.js:2:1:2:4)':
   [ 'anon (eval(test50.js:1:6:1:40):1:9:1:33)' ] }
*/