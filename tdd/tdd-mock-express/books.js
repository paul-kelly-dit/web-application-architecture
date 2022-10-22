const express = require('express');
const PORT = process.env.PORT || 8000;
const bookService = require('./bookService.js');
const app = express();

app.get('/books', (req, res) => {
    let books = bookService.getAll();
    // filter out books beginning with A

    var capitalized = books
                  .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                  
    return res.status(200).send(capitalized);
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

module.exports = app;
