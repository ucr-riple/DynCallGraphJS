function Monster() {
  this.eyeCount = 4;
}

var handler1 = {
  set: function set(obj, prop, value) {
    if (prop === "eyeCount" && value % 2 !== 0) {
      console.log("Monsters must have an even number of eyes");
    } else {
      return Reflect.set.apply(Reflect, arguments);
    }
  },
};
var monster1 = new Monster();
var proxy1 = new Proxy(monster1, handler1);
proxy1.eyeCount = 1;

proxy1.eyeCount;


/*Expected DCG Output
{ '(test88.js:14:16:14:29)':
   [ '(test88.js:1:1:3:2)' ],
  '(test88.js:15:14:15:43)': [ 'Proxy (Native)' ],
  'system (Native)':
   [ '(test88.js:6:8:12:4)' ],
  '(test88.js:8:7:8:63)': [ 'bound consoleCall (Native)' ] }
*/

/*Expected DCG2 Output
{ 'global (test88.js:14:16:14:29)':
   [ 'Monster (test88.js:1:1:3:2)' ],
  'global (test88.js:15:14:15:43)':
   [ 'Proxy (Native)(test88.js:15:14:15:43)' ],
  'system (Native)':
   [ 'set (test88.js:6:8:12:4)' ],
  'set (test88.js:8:7:8:63)':
   [ 'bound consoleCall (Native)(test88.js:8:7:8:63)' ] }
*/