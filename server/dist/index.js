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
const checkLoggedIn = (req, res, next) => {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        res.status(401).json({
            error: "You must be logged in",
        });
    }
    next();
};
// Start server
// Define the target timezone
// const targetTimezone = "Asia/Singapore";
// // Get the current timestamp in milliseconds
// const currentTimeMillis = Date.now();
// // Create a new Date object using the current timestamp
// const currentTime = new Date(currentTimeMillis);
// // Format the date according to the target timezone
// const formattedTime = currentTime.toLocaleString("en-US", {
//   timeZone: targetTimezone,
// });
// console.log(`Current time in ${targetTimezone}: ${formattedTime}`);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
