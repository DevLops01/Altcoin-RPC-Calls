
const request = require('request');
let username = 'user'
let password = 'password'

let options = {
    url: "http://localhost:9998",
    method: "POST",
    json: true,
    headers:
    { 
     "content-type": "application/Javascript"
    },
    auth: {
        user: username,
        pass: password
    },
    body: {"jsonrpc": "1.0", "id": "", "method": "gettxoutsetinfo", "params": [] }
};

function getData(){
request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
        console.log(body['result']['total_amount']); 
    }});
}

let total;
async function printTotal(){
    total = await getData();
    return total;
}
total = printTotal()

function returnToHtml(){
    console.log("Total Supply:", total)
}

setTimeout(printTotal, 5000)
setTimeout(returnToHtml, 10000)
