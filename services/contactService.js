import { nanoid } from "nanoid";
import generateVcard from "../utils/generateVcard";
import Contact from "../models/Contact";
import res from "express/lib/response";

const getOne = async function ({ id }) {
  return await Contact.findById(id);
};

const getAll = async function ({ filter = {}, limit = 10 }) {
  return await Contact.find(filter).limit(limit);
};

const add = async function (data) {
  data.uuid = nanoid(12);
  return await Contact.create(data);
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
