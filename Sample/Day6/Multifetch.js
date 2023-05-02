// const fetchNames = async () => {
//     try {
//       const res = await Promise.all([
//         fetch("'https://gist.githubusercontent.com/mahesh-ivy/4d1eee76a214320f7c5b74ceb263d548/raw/39800b084aced15d170a0a67c71b33b8d2f51ac3/Invoice.xml"),
//         fetch("https://jsonplaceholder.typicode.com/posts")
//       ]);
//       const data = await Promise.all(res.map(r => r.json()))
//       console.log(data.flat());
//     } catch {
//       throw Error("Promise failed");
//     }
// };

const { default: fetch } = require("node-fetch");     

var url='https://jsonplaceholder.typicode.com/posts'
var url1 ='https://gist.githubusercontent.com/mahesh-ivy/4d1eee76a214320f7c5b74ceb263d548/raw/39800b084aced15d170a0a67c71b33b8d2f51ac3/Invoice.xml'

fetch(url).then(reponse=>reponse.json()).then(data=>console.log(data));
fetch(url1).then(reponse=>reponse.text()).then(data=>console.log(data));

