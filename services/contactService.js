import { nanoid } from "nanoid";
import generateVcard from "../utils/generateVcard";
import generateQR from "../utils/generateQR";
import { s3Upload, s3Download } from "../utils/awsS3";
import Contact from "../models/Contact";

const getOne = async function ({ id }) {
  const contact = await Contact.findById(id);
  const qrDownloadURL = await s3Download({ key: contact.qrCode.key });

  contact.qrCode.location = qrDownloadURL;
  return contact;
};

const getAll = async function ({ filter = {}, limit = 10 }) {
  return await Contact.find(filter).limit(limit);
};

const add = async function (data) {
  //Create unique UUID
  data.uuid = nanoid(12);

  //Create QRcode
  const URL =
    process.env.NODE_ENV === "development"
      ? `${process.env.devURL}/qr/${data.uuid}`
      : `${process.env.prodURL}/qr/${data.uuid}`;

  const qr = await generateQR(URL);

  const { Location, Key } = await s3Upload({
    key: `${data.uuid}/${data.firstName}`,
    image: qr,
    type: "png",
  });

  const downloadURL = await s3Download({ key: Key });
  console.log(data);

  data["qrCode"] = { key: Key, location: Location };

  const newContact = await Contact.create(data);

  //Get signed URL for QR Code

  newContact.qrCode.location = downloadURL;

  return newContact;
};

const update = async function ({ id, data }) {
  return await Contact.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const del = async function ({ id }) {
  return await Contact.findByIdAndDelete(id);
};

const getVcard = async function ({ uuid }) {
  const contact = await Contact.findOne({ uuid });
  const vcard = await generateVcard(contact);

  return { contact, vcard };
};

export { getOne, getAll, add, update, del, getVcard };
