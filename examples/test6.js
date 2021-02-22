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
  '(/home/XYZ/research/DynCallGraphJS/examples/test6.js:10:1:10:24)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test6.js:3:14:5:4)'
  ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test6.js:4:5:4:24)': [ 'push (Native)' ],
  '(/home/XYZ/research/DynCallGraphJS/examples/test6.js:11:1:11:17)': [
    '(/home/XYZ/research/DynCallGraphJS/examples/test6.js:6:14:8:4)'
  ]
}
*/