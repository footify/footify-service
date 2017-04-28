const jwt = require('jsonwebtoken');
const conf = require('../conf');

function create(req, res, next) {
  const bar = req.body.bar;
  const size = req.body.size || '250x250';

  //TODO: Check if bar and informations are true
  console.log(process.env.SECRET_KEY);
  const token = jwt.sign(bar, process.env.SECRET_KEY, {
    noTimestamp: true
  });
  const url = `${conf.qrcode.api.createUrl}?ecc=H&size=${size}&data=${encodeURI(token)}`

  console.log(url);
  res.send({
    qrcode: {
      url
    }
  });
}

module.exports = {
  create,
};
