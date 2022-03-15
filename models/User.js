import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  mobile: String,
  role: {
    type: String,
    enum: ["admin", "staff"],
    default: "staff",
  },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

//Encrypt Password
UserSchema.pre("save", function (next) {
  const user = this;

  if (!this.isModified("password")) {
    next();
  }
  bcrypt.hash(this.password, saltRounds, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

//Compare Passwords
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User", UserSchema);

export default userModel;
