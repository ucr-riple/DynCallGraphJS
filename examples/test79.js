(function(){
function foo(){
        return new Function('with({q:function(){return;}}){q()}')
}

x = foo();
x();
})();
