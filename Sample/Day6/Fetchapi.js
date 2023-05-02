const fetch = require('node-fetch');
var url =fetch('https://jsonplaceholder.typicode.com/posts')
    url.then((response) => response.json()).then((data) => console.log(data));