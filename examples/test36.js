var arrayOfFunction = [ 
        function() { 
                return (function(){return "y"})
        }
] 
arrayOfFunction.pop()()


/*Expected Output
{ '(/home/XYZ/research/DynCallGraphJS/examples/test36.js:6:1:6:22)': [ 'pop (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test36.js:6:1:6:24)':
   [ '(/home/XYZ/research/DynCallGraphJS/examples/test36.js:2:9:4:10)' ] }
*/