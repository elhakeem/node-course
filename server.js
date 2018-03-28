const express = require('express');
const fs = require('fs');

//heroku port
const port = process.env.PORT || 3000;

var app = express();

var url;
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url} \n`;

  fs.appendFile('log.txt', log, err => {
    console.log(err);
  })

  next();
})




app.get('/', (req, res) => {
  res.render("index.hbs", {url: 'Home'});
});

app.get('/about', (req, res) => {
  res.render("about.hbs", {url: req.originalUrl.replace('/', '')});
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
