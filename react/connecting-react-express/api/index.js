const express = require('express');

const app = express();

// required middleware for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// An api endpoint that returns a short list of items
app.get("/api/books", (req, res) => {
  const list = ["book 1", "book 2", "book 3"];
  console.log("sent list of books");
  res.json(list);
})

app.post("/api/books", (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>.');
  console.log(req);
  const book = req.body.book;
  console.log("added book : " + book);
  res.json(`book ${book} successfully added`)
});

app.listen(8000, ()=> {
  console.log("listening on 8000");
})
