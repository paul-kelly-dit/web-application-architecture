var express = require("express");
var http = require("http");

const app = express();

app.get('/hello', (req, res) => {
    res.status(200);
    res.send('Hello World');
});

http.createServer(app).listen(3000);
