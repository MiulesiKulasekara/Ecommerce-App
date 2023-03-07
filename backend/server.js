const http = require("http");


const server = http.createServer((req,res)=>{
    res.writeHead(200,"200 success status");
    res.end();
})

server.listen(5000,()=>{
    console.log("server is up an running on port 5000");
})