import { Router } from "express";
import { Request, Response } from "express";
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  res.send(req.body);
});

export default router;
