var str = "Priya Dharshini";
var s = str.split(" ");
var reverse = "";
for(var i = 0;i<s.length;i++){
    var rev = "";
    var word = s[i];
    for(var j = word.length-1;j>=0;j--){
        rev = rev +word.charAt(j);
    }
    reverse = reverse + rev +" ";
}
console.log(reverse);