import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  mobile: String,
  company: String,
  position: String,
  address: String,
  website: String,
  summary: String,
  profileImage: String,
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
