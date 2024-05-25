import mongoose, { Schema, Document } from "mongoose";
export interface ReviewInterface extends Document {
  comments: string;
  tip: number;
  stars: number;
  time: Date;
  busId: string;
  user: string;
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
  user: {
    required: false,
    default: "anonymous",
  },
});

export default mongoose.model<ReviewInterface>("reviews", ReviewSchema);
