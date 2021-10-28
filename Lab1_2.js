const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const fs = require('fs');
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<head><title>Assment</title></head>');
        res.write('<body><h1>welcome and hello</h1></body>');
        res.write('<form action = "/message" method = "POST"><input type="text" name="username"></input><button type = "submit">send</button></form></form>')
        res.end();
    }
    if (url === "/message") {
        fs.appendFileSync("message.txt", "DUMMY");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

});

server.listen(3000);