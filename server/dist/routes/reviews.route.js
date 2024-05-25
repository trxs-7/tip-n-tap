import { Router } from "express";
import reviewsController from "../controller/reviews.controller.js";
const router = Router();
router.post("/", reviewsController.addReview);
export default router;
