const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
}).listen(3000)

//docker image build -t docker-study  .

