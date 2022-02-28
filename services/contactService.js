import Contact from "../models/Contact";

const getOne = async function ({ id }) {
  return await Contact.findById(id);
};

const getAll = async function ({ filter = {}, limit = 10 }) {
  return await Contact.find(filter).limit(limit);
};

const add = async function (data) {
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

export { getOne, getAll, add, update, del };
