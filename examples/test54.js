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
{ '(test54.js:1:1:9:11)':
   [ '(test54.js:1:2:9:8)' ],
  '(test54.js:8:9:8:15)':
   [ '(test54.js:2:9:7:10)' ],
  '(test54.js:6:11:6:30)':
   [ '(test54.js:5:19:5:50)' ],
  '(test54.js:5:42:5:47)':
   [ '(test54.js:6:13:6:29)' ],
  '(test54.js:6:24:6:28)':
   [ '(test54.js:4:19:4:49)' ],
  '(test54.js:4:42:4:47)':
   [ '(test54.js:3:19:3:43)' ] }
*/