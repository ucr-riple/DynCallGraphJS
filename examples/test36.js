var arrayOfFunction = [ 
        function() { 
                return (function(){return "y"})
        }
] 
arrayOfFunction.pop()()


/*Expected Output
{ '(test36.js:6:1:6:22)': [ 'pop (Native)' ],
  '(test36.js:6:1:6:24)':
   [ '(test36.js:2:9:4:10)' ] }
*/