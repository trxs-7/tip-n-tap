import mongoose, { Schema, Document } from "mongoose";
import { UserInterface } from "./users.model.js";
export interface ReviewInterface extends Document {
  comments: string;
  tip: number;
  stars: number;
  time: Date;
  busId: string;
}

const ReviewSchema = new Schema<ReviewInterface>({
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
});

export default mongoose.model<ReviewInterface>("reviews", ReviewSchema);
