(function () {
  var myTime;
  function myFunction1() {
          myTime = setTimeout(function(){  return "Hello"; }, 1);
        }
  function myFunction2() {
  var timesRun =0;
  var interval = setInterval(function(){  timesRun += 1;
          if(timesRun === 2){
              clearInterval(interval);
          } }, 30);
  }
  myFunction1();
  myFunction2();
  clearTimeout(myTime);
})();


/*Expected Output
{ '(test99.js:1:1:16:5)':
   [ '(test99.js:1:2:16:2)' ],
  '(test99.js:13:3:13:6)':
   [ '(test99.js:3:3:5:10)' ],
  '(test99.js:4:20:4:65)':
   [ 'setTimeout (Native)(test99.js:4:20:4:65)' ],
  '(test99.js:14:3:14:16)':
   [ '(test99.js:6:3:12:4)' ],
  '(test99.js:8:18:11:19)':
   [ 'setInterval (Native)(test99.js:8:18:11:19)' ],
  '(test99.js:15:3:15:23)':
   [ 'clearTimeout (Native)(test99.js:15:3:15:23)' ],
  'system (Native)':
   [ '(test99.js:8:30:11:14)' ],
  '(test99.js:10:15:10:38)':
   [ 'clearInterval (Native)(test99.js:10:15:10:38)' ] }
*/