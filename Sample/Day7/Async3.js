// const promise =new Promise(function(resolve,reject){

const { resolve } = require("path");

//     resolve("Resolved.....");   

// });

// promise.then(result => console.log(result));


function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function f3(){
    console.log('f3');

    setTimeout(f1,2000);

    const promise =new Promise(function(resolve,reject){

        resolve("Resolved.....");   
    
    });
    
    promise.then(resolve => console.log(resolve));
    
    f2();
}
f3();