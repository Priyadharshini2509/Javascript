var a = 10 ;
var b = 15 ;
var res;
var operator ="-";
switch(operator){
    case '+' :
        res = a+b;
        console.log(res);
        break;
    case '-' :
        res = a - b;
        console.log(res);
        break;
    case '*' :
        res = a * b;
        console.log(res);
        break;
    case '%' :
        res = a % b;
        console.log(res);
        break;
    case '/' :
        res = a/b;
        console.log(res);
        break;
    default:
        console.log('Invalid operator');
        break;
}