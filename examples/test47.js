var scope = function () {
  return "global";
}; 
function checkscope() {
  var scope = function () {
    return "local";
  }; 
  scope();
}
checkscope();
scope();
