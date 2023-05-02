var start = 2;
var end = 100;
while(start<end){
    var con = false;
    for(var i = 2;i<=start/2;i++){
        if(start%i == 0){
            var con = true;
            break;
        }
    }
    if(!con && start !=0 && start != 1){
        console.log(start+" ");
        start++;
    }
}
