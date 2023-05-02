var ops =(a,b)=>{
    return(a+b);
}
var add = function(a,b,ops){
    console.log(ops(a,b));
}
add(10,20,ops)


function ops(some){
    return some;
}
function add(n1,n2,fun){
    let sum = n1 + n2;
    fun(sum);
}

add(20,20,ops)