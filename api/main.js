const express = require('express');
const _ = require('lodash');
const config = require('./config');
const router = require('./router');

const routes = config.getRoutes();

// Create a new express app
const app = express();
router.setup(app, routes);

app.get('/', function (req, res, next) {
  res.send('Hello world');
});

app.listen(process.env.PORT || 3000);
