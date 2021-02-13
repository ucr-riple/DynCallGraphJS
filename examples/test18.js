function a(x) {
  function b(y) {
    return x + y;
  }
  return b;
}
a(3)(4);
