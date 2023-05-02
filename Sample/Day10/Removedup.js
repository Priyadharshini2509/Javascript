var str = "whatwhyhow";
var n = str.length;
var s = str.split('');
var index = 0;
for (var i = 0; i < n; i++){
    for(var j = 0; j<i; j++){
       if(s[i] == s[j]){
        break;
       } 
    }
    if(j == i){
        s[index++] = s[i];
    }     
}
console.log(s.join("").slice(s,index));