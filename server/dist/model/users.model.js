import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true, unique: true },
    lastReview: { type: Date, required: true, default: new Date(0) },
});
const User = mongoose.model("users", userSchema);
export default User;
