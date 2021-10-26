const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<head><title>Assment</title></head>');
        res.write('<body><h1>welcome and hello</h1></body>');
        res.write('<form action = "/message" method = "POST"><input type="text" name="username"></input><button type = "submit">send</button></form></form>')
        return res.end();
    }
    if (url === "/message") {
        res.setHeader("Content-Type", "text/html");
        res.write('<head><title>Assment</title></head>');
        res.write("<body>Hello from my Node.js server!</body>");
        return res.end();
    }


});
server.listen(3000);