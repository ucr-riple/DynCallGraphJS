var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

obj.foo;
