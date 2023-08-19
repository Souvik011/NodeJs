const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    let url = req.url;
    const method = req.method;
    if(url == '/'){
        fs.readFile("message.txt",(err,data) => {
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });  
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on("data" , (chunk) => {
            body.push(chunk);
        });
        req.on("end",() => {
            const parseBody = Buffer.concat(body).toString();
            const msg = parseBody.split("=")[1];
            fs.writeFileSync('message.txt',msg);
        });
        
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
   
    

});

server.listen(4000);