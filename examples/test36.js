var arrayOfFunction = [ 
        function() { 
                return (function(){return "y"})
        }
] 
arrayOfFunction.pop()()