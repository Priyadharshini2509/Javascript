let str = "Hi what are doing? ,Hello? ";
let obj ={};
for(let i = 0;i<str.length;i++){
    // if(obj[str[i]] == undefined){
    //     obj[str[i]]= 1;
    // }
    // else{
    //     obj[str[i]] +=1;
    // }
    var ch = str.charAt(i);
    if(obj[ch]){
        obj[ch]++;
    }else{
        obj[ch] =1;
    }
}
console.log(obj);