var str ="Hi How are you ? What are you doing ?";
var strarr = str.split(" ");
// console.log(strarr);
var longest = 0;
var word = null;
for(var i=0;i<strarr.length-1;i++){
    if (longest < strarr[i].length) {
        longest = strarr[i].length;
        word = strarr[i];
    }
}
console.log(word);
