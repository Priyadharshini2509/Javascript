var n = 123;
var con = false;
for(var i = 2;i<=n/2;i++){
    if(n%i == 0){
        con = true;
        break;
    }

}
if(!con){
    console.log("Prime");
}
else{
    console.log("Not prime");
}

