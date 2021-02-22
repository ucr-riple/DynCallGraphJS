        (function(){
        var obj={
                handler: function(original){
                                return function(){
                                        return original;
                                }
                        },
                neon: function(){
                        var newcall = function(){ return "newcall"}
                        var retobj = obj["hand"+"ler"](newcall)
                        return retobj()
                }
        }
        var now = obj["neon"]()
        now()
        })();

/*Expected Output
{ '(test58.js:1:9:16:13)':
   [ '(test58.js:1:10:16:10)' ],
  '(test58.js:14:19:14:32)':
   [ '(test58.js:8:23:12:18)' ],
  '(test58.js:10:38:10:64)':
   [ '(test58.js:3:26:7:26)' ],
  '(test58.js:11:32:11:40)':
   [ '(test58.js:4:40:6:34)' ],
  '(test58.js:15:9:15:14)':
   [ '(test58.js:9:39:9:68)' ] }
*/