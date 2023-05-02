var str = "priya , kaviya , priya , tharani";
var s = str.split(",");
var res = [];
for(var i = 0 ; i<s.length ; i++){
    if(res.indexOf(s[i]) == -1){
        res.push(s[i]);
    }
}
console.log(res.join(","));