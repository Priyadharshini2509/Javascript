var n = 1234;
var r,s=0;
for(s = 0; n!=0;n=Math.floor(n/10)){
    r = n%10;
    s = s+r;
}
console.log(s);