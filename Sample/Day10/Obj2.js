var s = "dog";
var a = new Array();
for(var i = 0; i<s.length; i++){
    for(var j = i+1 ; j<s.length+1;j++){
        a.push(s.slice(i,j));
    }
}
console.log(a);

