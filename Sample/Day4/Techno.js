var n = 2025;
var temp = n;
var count = 0;
while(n !=0 ){
    count++;
    n = Math.floor(n/10);
    console.log(n);
}
console.log(count);
var l = Math.floor(temp/Math.pow(10,count-2));
console.log(l);
var r = Math.floor(temp%Math.pow(10,count-2));
console.log(r);
var sum = l+r;
console.log(sum);
var sqr = sum * sum;
if(temp == sqr){
    console.log("Tech");
}
else{
    console.log("Not Tech");
}
