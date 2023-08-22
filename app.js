const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in the middleware');
    next();// this allows request to continue to the next middleware in line 
});
app.use((req,res,next) => {
    console.log('in the middleware 2');
    res.send('<h1 >Hello from Express </h1>');
});

const server = http.createServer(app);

server.listen(4000);