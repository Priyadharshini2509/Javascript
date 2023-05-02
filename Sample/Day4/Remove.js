var arr =[10,20,20,30,40,50,40];
for(var i =0;i<arr.length;i++){
    if(arr[i] != arr[i+1]){
        var temp = arr[i];
        console.log(temp);
    }
}
// arr[j++] = arr[arr.length-1];
// var l = j;
// for(var k =0 ;k<l;k++){
//     console.log(arr[k]);
// }