var str = "Priya Dharshini";
var s = " ";
for(var i = str.length;i>=0;i--){
    if(str.charAt(i) != 32){
        s = s+str.charAt(i);
    }
}
console.log(s);