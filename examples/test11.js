function foo(x) {
  return x;
}
function test() {
  try {
    foo(4);
    try {
      foo(3);
    } finally {
      foo(2);
    }
  } finally {
    foo(1);
  }
}
test();
