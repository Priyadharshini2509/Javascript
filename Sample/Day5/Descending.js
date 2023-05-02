var arr = [1,3,5,46,2];
var temp = 0;
for(var i =0;i<arr.length;i++){
    console.log(arr[i]+" ");
}
for(var i = 0 ;i<arr.length;i++){
    for(var j = i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(var i = 0 ;i<arr.length;i++){
    console.log(arr[i]+" ");
}
