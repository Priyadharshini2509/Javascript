var n = 9;
var b = 0;
var r, i = 1;
while (n != 0){
    r = n % 2;
    n = parseInt(n/2);
    b = b + r *i;
    i = i * 10;
}
console.log(b);