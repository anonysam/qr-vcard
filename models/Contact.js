import mongoose from "mongoose";

const { Schema } = mongoose;

const ContactSchema = new Schema({
  uuid: String,
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  organization: String,
  title: String,
  workAddress: String,
  summary: String,
  photo: String,
  qrCode: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const contactModel = mongoose.model("Contact", ContactSchema);

export default contactModel;
