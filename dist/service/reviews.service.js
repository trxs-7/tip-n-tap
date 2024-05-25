import reviewsModel from "../model/reviews.model.js";
const AddReview = async (newReview) => {
    try {
        return await reviewsModel.create(newReview);
    }
    catch (err) {
        throw new Error(err);
    }
};
