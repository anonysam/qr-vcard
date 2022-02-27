import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;
