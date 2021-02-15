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