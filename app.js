const http = require('http');

const routes = require('./FirstNode');

console.log(routes.hardTxt);

const server = http.createServer(routes.handler);

server.listen(4000);