const _ = require('lodash');
const async = require('async');

function setup(app, routes) {
  _.each(routes, (route) => {
    app[route.type](route.url, route.handlers);
  });
}

module.exports = {
  setup
};
