var str = "This is a javascript program";
var count = 0;
for(var i = 0 ;i<str.length;i++){
    var ch = str[i];
    if(ch == " "){
        count = count + 1;
    }
}
count = count + 1;
console.log(count);