const QRCodeController = require('../../api/qrcode/qrcode-controller');

describe('QRCodeController', () => {

  it('should exist', () => {
    expect(QRCodeController).toBeDefined();
  });

  it('should create a QRCode url', () => {
    QRCodeController.create({
      body: {
        bar: {
          id: 123,
          name: "Mauri7"
        }
      }
    }, { send: (data) => expect(data.qrcode.url).toBe("https://api.qrserver.com/v1/create-qr-code/?ecc=H&size=250x250&data=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiTWF1cmk3In0.SbvnaqK2YuAgbzZ_xhkSxsl54dlHY5l9rhJdrETx3lw") });
  });

});
