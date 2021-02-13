function foo(){
        return;
}
function bar(){
        return;
}
function main(temp){
        temp=="foo"?foo():bar.call(this);
}

main("bar")