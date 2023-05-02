var bal = 100000;
var withdraw , deposit;
var c = 3;
switch(c){
    case 1 :
        withdraw = 110000;
        if(bal >= withdraw){
            bal = bal - withdraw;
            console.log("Collect the amount");
        }
        else{
            console.log("Insufficient Balance");
            }
            break;
        case 2 :
            deposit = 500;
            bal = bal + deposit;
            console.log("Money has been Successfully");
            break;
        case 3 :
            console.log("Balance : "+bal);
            break;
        default :
            console.log("");
}
