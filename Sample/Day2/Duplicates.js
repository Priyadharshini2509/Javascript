var a = [1,2,3,4,5,5,6,1,2,3,4];
var arrlen = a.length;
for(var i =0;i<arrlen;i++){
    for(var j =i+1;j<arrlen;j++){
        //compare
        if(a[i] == a[j]){
            delete a[j];
        }
    }
}
console.log(a);
