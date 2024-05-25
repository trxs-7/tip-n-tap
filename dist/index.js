import express from "express";
import reviewsRouter from "./routes/reviews.route.js";
const app = express();
const port = 3000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/review", reviewsRouter);
// Routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.get("/api", (req, res) => {
    res.json({ message: "API is working!" });
});
// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
