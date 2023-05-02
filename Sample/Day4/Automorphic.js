var n = 76;
var temp = n;
var sqt = n * n;
var count = 0;
while(n!=0){
    count++;
    n = Math.floor(n/10);
}
var a = Math.floor(sqt % Math.pow(10,count));
if(temp == a){
    console.log("Automorphic");
}
else{
    console.log("Not a Automorphic");
}