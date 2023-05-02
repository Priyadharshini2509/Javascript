var obj =[{
    movie : "Beast",
    dir : "Nelson",
    sts : false
},{
    movie : "Raja Rani",
    dir : "Atlee",
    sts : true
},{
    movie : "Priya",
    dir : "Tharani",
    sts : false
}];
for (var i = 0; i<obj.length; i++){
    if(obj[i].sts){
        console.log("Already Watched");
    }
    else{
        console.log("Not Watched");
    }
}