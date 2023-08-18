const http = require('http');

// function rqListener(req,res) {

// };

// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    console.log("Souvik Chakraborty");
});

server.listen(4000);