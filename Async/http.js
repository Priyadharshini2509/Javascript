// var XMLHttpRequest = require('xhr2');
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();
 
// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

// var XMLHttpRequest = require('xhr2');
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange',() =>{
//     // console.log(request,request.readyState);
//     if(request.readyState ===4){
//         console.log(request,request.responseText);
//     }
// });

// request.open('GET','https://jsonplaceholder.typicode.com/posts');
// request.send();

const getTodos = () =>{
    
var XMLHttpRequest = require('xhr2');
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() =>{
    // console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200 ){
        const data = JSON.parse(request.responseText);
        callback(undefined,data);
        // console.log(request,request.responseText);
    }
    else if(request.readyState === 4){
        callback('could not fetch data',undefined)
        // console.log('could not fetch the data');
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/posts');
request.send();

};
getTodos((err,data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
});
 