var arr = [1,23,67,98,9,8,7,6,3];
var big = arr[0];
for(var i = 0;i<arr.length;i++){
    if(arr[i]>big)
    big = arr[i];
}
console.log(big);

