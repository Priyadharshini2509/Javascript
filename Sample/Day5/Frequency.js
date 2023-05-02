var str ="aabbcc";
var count = 0;
for(var i = 0;i<str.length;i++){
    if(str[i] == str[i+1]){
        count++;
    }
    else{
        console.log(count);
        count = 1;
    }
}