import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
  bio: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
