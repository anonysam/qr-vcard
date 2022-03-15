import User from "../models/User";

const getOne = async function ({ id }) {
  return await User.findById(id);
};

const getAll = async function ({ filter = {}, limit = 10 }) {
  return await User.find(filter).limit(limit);
};

const add = async function (data) {
  return await User.create(data);
};

const update = async function ({ id, data }) {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const del = async function ({ id }) {
  return await User.findByIdAndDelete(id);
};

export { getOne, getAll, add, update, del };
