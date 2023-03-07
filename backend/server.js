const http = require("http");


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("hello world !!!!!!!!!");
    res.write("my name is imash");
    res.end();
})

server.listen(5000,()=>{
    console.log("server is up an running on port 5000");
})