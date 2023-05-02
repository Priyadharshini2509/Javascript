var str = "HiHello";
var letter = "H";
var count = 0;
for(var i = 0; i<str.length; i++){
    if(str.charAt(i) == letter){
        count = count + 1;
    }   
}
console.log(count);

