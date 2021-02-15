(function () {
        function main(){
          var x = function() { return 2; } 
          var y = function(inp) { return inp();}
          var z = function(ans) { return ans(); } 
          z(function(){y(x)});
        }
        main();
      })();