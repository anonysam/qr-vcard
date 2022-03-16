import QRCode from "qrcode";

const generateQR = async (url) => {
  try {
    return await QRCode.toDataURL(url);
  } catch (err) {
    console.log(err);
  }
};

export default generateQR;
