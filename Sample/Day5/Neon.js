// n = 9 ;
// sqr of 9=81
// sum of Number 8+1=9

var n = 97;
var sum = 0;
var sqr = n * n;
while(sqr != 0){
    var l = sqr % 10;
    sum = sum + l;
    sqr = Math.floor(sqr/10);
}
if(n==sum){
    console.log("Neon");
}
else{
    console.log("Not a neon number");
}