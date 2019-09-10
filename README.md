# Altcoin-RPC-Calls
Node.JS script that allows for making RPC calls to virtually any Bitcoin derivative altcoin. Perfect for creating explorers, and implementing cryptocurrency payments in to nodejs applications

Requirements:
Node.js >= v8.0
request - npm i request


RPC Calls

placed in "method": "CALL HERE"

example
``
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
``

Avaialable RPC Calls - https://github.com/PythonKoder/Altcoin-RPC-Calls/blob/master/index.js
