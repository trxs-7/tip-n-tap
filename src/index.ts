import express, { Request, Response } from "express";
import reviewsRouter from "./routes/reviews.route.js";
const app = express();
const port = 3000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/review", reviewsRouter);
// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
