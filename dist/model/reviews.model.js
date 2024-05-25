import mongoose, { Schema } from "mongoose";
const ReviewSchema = new Schema({
    comments: {
        type: String,
        default: "",
    },
    tip: { type: Number, default: 0, required: false },
    busId: { type: String, default: "", required: true },
    time: {
        type: Date,
        default: Date.now(),
    },
    stars: {
        type: Number,
        default: 0,
        required: true,
    },
    user: {
        required: false,
        default: "anonymous",
    },
});
export default mongoose.model("reviews", ReviewSchema);
