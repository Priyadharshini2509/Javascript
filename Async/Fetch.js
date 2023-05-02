const fetch = require('node-fetch');
    var fetches = fetch("https://jsonplaceholder.typicode.com/posts");
    fetches.then(response => response.json()).then(data =>{console.log(data)});
