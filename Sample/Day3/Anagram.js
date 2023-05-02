var a = 'listen';
var b = "slients";
var c = a.split('').sort().join();
    // console.log(c);
var d =b.split('').sort().join();
for(var i = 0; i<1; i++){
    for(var j = 0;j<1;j++){
    //  if(c.length === d.length){
        if(c[i] == d[j]){
            console.log("Anagram");
        }
        else{
            console.log("Not a Anagram");
        }
    // }
}
}