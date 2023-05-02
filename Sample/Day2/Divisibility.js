// var n = 2;
// var data = [82 ,22 ,62 ,32 ,42];
// if(data[n-1] % 10 == 0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

var data = [85 ,25 ,55 ,35 ,43];
var n = data.length;    //5
for (var i = 0;i<data.length;i++){
    var dig = data[i]%n;       //dig=80%5 =0
}   
if(dig == 0){
    console.log("yes");
}
else{
    console.log("No");
}