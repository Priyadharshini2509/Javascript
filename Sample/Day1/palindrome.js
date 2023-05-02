var str = 'madam';
var s="";
for(var i = str.length;i>=0;i--){
    s = s +str.charAt(i);
}
if(s == str){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}