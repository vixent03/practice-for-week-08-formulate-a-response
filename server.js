const http = require("http");
const host = 'localhost';
const port = 5000
const requestListener = function(req,res){
    res.statusCode = 200;
    res.setHeader ("Content-Type", "text/html");

    res.end(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello World!</title>
        </head>
        <body>
          <h1>Hello there!</h1>
          <h2>welcome to my local server<h2>
        </body>
        </html>`
    );
}
const sever = http.createServer(requestListener)
sever.listen(port,host,() => {
    console.log("server is listening to port",port)
})
