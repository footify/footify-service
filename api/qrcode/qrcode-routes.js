const QRCodeController = require("./qrcode-controller");

module.exports = [
  {
    type: "get",
    url: "/qrcode",
    handlers: [QRCodeController.create]
  }
];
