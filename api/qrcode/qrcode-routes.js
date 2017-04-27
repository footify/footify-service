const QRCodeController = require("./qrcode-controller");

module.exports = [
  {
    type: "post",
    url: "/qrcode"
    handlers: [QRCodeController.create]
  }
];
