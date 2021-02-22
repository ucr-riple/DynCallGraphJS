(function () {
        function main(){
          var x = function() { return 2; } 
          var y = function(inp) { return inp();}
          var z = function(ans) { return ans(); } 
          z(function(){y(x)});
        }
        main();
      })();


/*Expected Output
{ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:1:1:9:11)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:1:2:9:8)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test54.js:8:9:8:15)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:2:9:7:10)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test54.js:6:11:6:30)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:5:19:5:50)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test54.js:5:42:5:47)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:6:13:6:29)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test54.js:6:24:6:28)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:4:19:4:49)' ],
  '(/home/renzo/research/DynCallGraphJS/examples/test54.js:4:42:4:47)':
   [ '(/home/renzo/research/DynCallGraphJS/examples/test54.js:3:19:3:43)' ] }
*/