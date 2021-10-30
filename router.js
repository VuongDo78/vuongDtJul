const fs = require('fs');
const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<head><title>Assment</title></head>');
        res.write('<body><h1>welcome and hello</h1></body>');
        res.write('<form action = "/message" method = "POST"><input type="text" name="username"></input><button type = "submit">send</button></form></form>')
        res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            fs.appendFileSync("message.txt", " " + parseBody + "qtyyy\n" + "\n");
        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}
module.exports = requestHandler;