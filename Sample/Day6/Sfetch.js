const fetch = require('node-fetch');
async function fetchs(){
    const res = await fetch("https://gist.githubusercontent.com/mahesh-ivy/4d1eee76a214320f7c5b74ceb263d548/raw/39800b084aced15d170a0a67c71b33b8d2f51ac3/Invoice.xml");
    res.text().then(res =>  console.log(res));
    // res.json().then(res =>  console.log(res));
}
fetchs();

