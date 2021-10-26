const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader(200, { 'Content-Type': 'text/html' });
    res.write("Hello from my Node.js server!");
});
server.listen(3000);