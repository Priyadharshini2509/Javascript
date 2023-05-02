var arr=[12,32,1,2,3];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    var temp =0;
    if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
  }
}
for(var k =0;k<arr.length;k++){
    console.log(arr[k]);
}
console.log("First Maximum :"+" "+arr[arr.length-5]);