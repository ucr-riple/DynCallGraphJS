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
