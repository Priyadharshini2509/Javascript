var arrayemp =[
    {"id":1,"name":"priya"},
    {"id":2,"name":"dharshini"},
    {"id":3,"name":"Gokul"},
    {"id":4,"name":"Kavin"},
    {"id":5,"name":"Kavipriya"},
    {"id":1,"name":"Kaviya"},
    {"id":7,"name":"priya"},
    {"id":8,"name":"Muthumahesh"},
    {"id":9,"name":"Dinesh"},
    {"id":1,"name":"priyadharshini"}
];
for(var i = 0 ; i<arrayemp.length;i++){
    console.log(arrayemp[i]);
}
// var arr = [];
for(var j = 0;j<arrayemp.length;j++){
    for(var k = j+1;k<arrayemp.length;k++){
        if(arrayemp[j].id == arrayemp[k].id){
            // arr.push(arrayemp[j]);
            delete arrayemp.id;
            console.log(arrayemp);
        }
    }
}
//console.log(arr);



