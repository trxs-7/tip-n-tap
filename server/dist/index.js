import reviewsRouter from "./routes/reviews.route.js";
import authRouter from "./routes/auth.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./middleware/middleware.js";
dotenv.config();
const port = 3000;
// Middlewares
app.use("/review", reviewsRouter);
app.use("/auth/google", authRouter);
// Routes
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB Typescript"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
