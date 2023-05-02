var a = "listen";
var b = "slient";
if(a.length == b.length){
    var c = a.split('').sort().join();
    var d =b.split('').sort().join();
    if(c == d ){
     console.log("Anagram");   
    }
    else{
        console.log("Not Anagram");
    }
}
