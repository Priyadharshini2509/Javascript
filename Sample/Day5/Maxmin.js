var arr = [4,7,8,1,2,3];
var min = arr[0];
var max = arr[0];
for(var i = 0; i < arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log("Minimum number: "+min);
console.log("Maximum number: "+max);