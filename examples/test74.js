function foo() {
        return;
}
function bar() {
        return;
}
var arr = ["x"];
var result={}

function main() {
        var result = act(arr,foo)
        return result;
}
function act(a,f){
        
        a.forEach(function (element) {
                return result[element] = bar;
        });
        return result;
}
main();
result["x"]()