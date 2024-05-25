import reviewsService from "../service/reviews.service.js";
import { Request, Response } from "express";
const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    await res.status(200).json(await reviewsService.AddReview(req.body));
  } catch (err) {
    await res.status(500).send(err);
  }
};

export default { addReview };
