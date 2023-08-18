const http = require('http');

// function rqListener(req,res) {

// };

// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    let url = req.url;
    res.setHeader('Content-Type' , 'text/html');
    if(url == '/home'){
        res.write('<head>');
        res.write('<body><h1>Welcome Home </h1></body>');
        res.write('</head>');
        res.end();
    }else if(url == '/about'){
        res.write('<head>');
        res.write('<body><h1>Welcome to About US page </h1></body>');
        res.write('</head>');
        res.end();
    } else if(url == '/node'){
        res.write('<head>');
        res.write('<body><h1>Welcome to my Node JS Project </h1></body>');
        res.write('</head>');
        res.end();
    }
});

server.listen(4000);