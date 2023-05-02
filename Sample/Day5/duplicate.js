var arr = [2,4,6,4,8,4,6,10,10];
for(var i = 0 ; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] ==  arr[j]){
            console.log(arr[j]);
        }
    }
}