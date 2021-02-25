var arrayOfFunction = [ 
        function() { 
                return (function(){return "y"})
        }
] 
arrayOfFunction.pop()()


/*Expected DCG Output
{ '(test36.js:6:1:6:22)': [ 'pop (Native)' ],
  '(test36.js:6:1:6:24)':
   [ '(test36.js:2:9:4:10)' ] }
*/

/*Expected DCG2 Output
{ 'global (test36.js:6:1:6:22)':
   [ 'pop (Native)(test36.js:6:1:6:22)' ],
  'global (test36.js:6:1:6:24)':
   [ 'anon (test36.js:2:9:4:10)' ] }
*/