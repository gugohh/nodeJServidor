const http = require('http');
const file = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server =http.createServer((req,res)=>{
    let url = req.url;
    
    file.readFile(`allservidor${url}.html`,(err , data) =>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();
    })
}).listen(port,hostname,()=>{
    console.log(hostname);
})
