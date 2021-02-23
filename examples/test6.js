var language = {
  log: [],
  set current(name) {
    this.log.push(name);
  },
  get current() {
    return this.log;
  },
};
language.current = "EN";
language.current;


/*Expected Output
{
  '(test6.js:10:1:10:24)': [
    '(test6.js:3:14:5:4)'
  ],
  '(test6.js:4:5:4:24)': [ 'push (Native)' ],
  '(test6.js:11:1:11:17)': [
    '(test6.js:6:14:8:4)'
  ]
}
*/