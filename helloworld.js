// link to node's built-in http library
const http = require('http');

// launch a web server, listen for http requests, and send http responses to each one
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000);

console.log('hello world');