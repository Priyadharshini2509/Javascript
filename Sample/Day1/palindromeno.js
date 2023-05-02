var n = 4345;
var r,temp = n,s=0;
while(n!=0){
    r = n%10; //5
    s = (s*10)+r;   //5
    n = n/10;   //4345/10=434
}
if(temp == s){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}