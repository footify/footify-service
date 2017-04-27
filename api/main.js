const express = require('express');
const config = require('./config');

console.log(config.getRoutes());

// Create a new express app
const app = express();

app.get('/', function (req, res, next) {
  res.send('Hello test');
});

app.listen(process.env.PORT || 3000);
