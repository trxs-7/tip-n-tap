import reviewsService from "../service/reviews.service.js";
const addReview = async (req, res) => {
    try {
        await res.status(200).json(await reviewsService.AddReview(req.body));
    }
    catch (err) {
        await res.status(500).send(err);
    }
};
export default { addReview };
