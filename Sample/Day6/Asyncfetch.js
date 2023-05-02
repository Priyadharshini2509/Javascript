const fetch=require ('node-fetch')

function getcode(){
    console.log("Json");
}

async function typicode()
{
    try
    {   
        await getcode();
        var res1 = await fetch('https://gist.githubusercontent.com/mahesh-ivy/4d1eee76a214320f7c5b74ceb263d548/raw/39800b084aced15d170a0a67c71b33b8d2f51ac3/Invoice.xml');
        await res1.text().then(data=>console.log(data)); 
        var res=await fetch('https://jsonplaceholder.typicode.com/posts');
        res.json().then(data=>console.log(data)); 
            
    }
    catch(err)
    {   
        console.log('error');
    }
}
typicode();