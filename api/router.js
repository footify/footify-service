const _ = require('lodash');
const async = require('async');

function setup(app, routes) {
  _.each(routes, (route) => {
    app[route.type](route.url, (req, res, done) => {
      const handlers = _.map(route.handlers, (handler) => (next) => handler(req, res, next));
      async.waterfall(handlers, done);
    });
  });
}

module.exports = {
  setup
};
