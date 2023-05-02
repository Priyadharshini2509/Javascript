var str = "Hi How are you Hi";
var arr = str.split(" ");
for(var i = 0 ;i<arr.length;i++){
    for(var j = i+1 ;j<arr.length;j++){
       if(arr[i] == arr[j]){
        console.log(arr[j]);
       } 
    }
}

