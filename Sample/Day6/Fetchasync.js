// const fetch = require('node-fetch')
// async function res(){
//     try{
//         let fetches = await fetch("https://jsonplaceholder.typicode.com/posts");
//         // fetches.text().then(url =>console.log(url));
//          fetches.json().then(url =>console.log(url));
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// res(); 
const { default: fetch } = require("node-fetch");     
var url1 ='https://gist.githubusercontent.com/mahesh-ivy/4d1eee76a214320f7c5b74ceb263d548/raw/39800b084aced15d170a0a67c71b33b8d2f51ac3/Invoice.xml'
     fetch(url1).then(reponse=>reponse.text()).then(data=>console.log(data));

