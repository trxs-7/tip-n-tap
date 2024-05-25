import reviewsModel, { ReviewInterface } from "../model/reviews.model.js";

interface FEReviewInterface {
  comments: string;
  tip: number;
  stars: number;
  time: Date;
  busId: string;
}

const AddReview = async (newReview: FEReviewInterface) => {
  try {
    return await reviewsModel.create(newReview);
  } catch (err: any) {
    throw new Error(err);
  }
};

export default { AddReview };