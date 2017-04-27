const fs = require('fs');

function getRoutes() {
  const elements = fs.readdirSync(".");

  return elements;
}

module.exports = {
  getRoutes
};
