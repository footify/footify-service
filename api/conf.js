const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const rootPath = __dirname;

function getRoutes(subPath) {
  const pathToInspect = path.join(rootPath, subPath || "");

  const routes = _.map(fs.readdirSync(pathToInspect), (pathFile) => {
    if (fs.lstatSync(path.join(pathToInspect, pathFile)).isDirectory()) {
      const extractedRoutes = getRoutes(pathFile);
      return extractedRoutes;
    } else if (/-routes.js$/.test(pathFile)) {
      const extractedRoutes = require(path.join(pathToInspect, pathFile));
      return extractedRoutes;
    }
    return null;
  });

  return _.chain(routes).flattenDeep().compact().value();
}

module.exports = {
  getRoutes,
  qrcode: {
    api: {
      createUrl: "https://api.qrserver.com/v1/create-qr-code/",
      readUrl: "https://api.qrserver.com/v1/read-qr-code/"
    }
  }
};
