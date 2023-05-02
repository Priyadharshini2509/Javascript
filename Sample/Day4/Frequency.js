var arr = [1,2,3,1,3,6,5,3,7,9];
var freq =[arr.length];
for(var i =0;i<arr.length;i++){
    freq[i] = 1;
    for(var j = i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            freq[i]++;
            arr[j] = -1;
        }
    }
}
for(var k =0;k<arr.length;k++){
    if(arr[k] != -1){
        console.log(arr[k]+" "+freq[k]);
    }
}