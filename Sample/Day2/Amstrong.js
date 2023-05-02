var n = 153;
var sum = 0;
var temp = n;
while(temp != 0){
    var r = temp % 10; //153%10=3
    sum =sum +(r*r*r);  //3*3*3 = 27    27+5*5*5=27+125  152+1=153
    temp = Math.floor(temp / 10);   //removing last digit n 15/10=5
}
if(sum === n){
    console.log("Amstrong");
}
else{
    console.log("Not a Amstrong");
}

//1634 = 1*1*1*1+ 6*6*6*6+ 3*3*3*3+ 4*4*4*4 = 1634