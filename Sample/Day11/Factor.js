var n = 28;
var arr = [];
console.log("Factor of "+""+n+" ");
for(var i = 0;i<n;i++){
    if(n % i == 0){
        console.log(i);
        arr.push(i);
    }
    
}
console.log("Array of factor"+" "+arr);
var sum = 0;
for(var j =0;j<arr.length;j++){
    sum = sum +arr[j]
}
console.log("Sum of array"+" "+sum);