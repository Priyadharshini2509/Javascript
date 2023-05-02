var n = 219;
var n1 = n * 2;
var n2 = n * 3;
var str = n + ""+ n1 + n2;
var flag = true;
for(var i = '1';i <= '9';i++){
    var count = 0;
    for(var j = 0 ;j<str.length;j++){
        var k = str.charAt(i);
        if(k == i){
            count++;
        }
        if(count>1 || count == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log("Fascinating");
    }else{
        console.log("Not Fascinating");
    }
}