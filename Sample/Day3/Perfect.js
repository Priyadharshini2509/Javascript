var n = 28;
var sum = 0;
var i = 1;
while(i <= n/2){    
    if(n%i == 0){
        sum = sum+i;    //iteration 1,2
    }
    i++;
}
if(sum==n){
    console.log("Perfect");
}
else{
    console.log("Not perfect");
}