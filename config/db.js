import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodbURI);
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
