var arr = [1,23,4,5,6,7,8,21];
var big = arr[0];
var nextbig = arr[0];
for(var i = 0;i<arr.length;i++){
    if(arr[i]>big){
        nextbig = big; 
        big = arr[i];
    }
    else if(arr[i]>nextbig && arr[i]!=big)
        nextbig = arr[i];
}
console.log(nextbig);
