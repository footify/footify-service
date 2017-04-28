const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const config = require('./conf');
const router = require('./router');

const routes = config.getRoutes();

// Load environnement
const node_env = (process.env.NODE_ENV || 'development').toLowerCase();
dotenv.load({
  path: `.env.${node_env}`
});

// Create a new express app
const app = express();
router.setup(app, routes);

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Hello world');
});

app.listen(process.env.PORT || 3000);
