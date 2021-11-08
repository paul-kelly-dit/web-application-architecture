const express = require('express');
const api = require('./api');
let bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use('/article', api);

    // catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(3000);
