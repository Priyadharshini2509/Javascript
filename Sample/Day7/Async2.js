function f1(){
    console.log("f1");
}
function f2(){
    console.log("f2");
}
function main(){
    console.log("main");
    setTimeout(f1,2000);
    f2();
}
main();