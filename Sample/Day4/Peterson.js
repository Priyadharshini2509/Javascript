var n = 145;
var temp = n ;
var sum = 0;
while(n>0){
    var rem = n%10 //5
    var fact = 1;
    while(rem >0){
        fact = fact * rem;
        rem--;
    }
    sum = sum + fact ;
    n = Math.floor(n/10);
}
if(temp==sum){
    console.log("Peterson");
}
else{
    console.log("Not peterson");
}