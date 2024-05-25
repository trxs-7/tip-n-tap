import express, { Request, Response } from "express";
import reviewsRouter from "./routes/reviews.route.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();
const app = express();
const port = 3000;
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/review", reviewsRouter);
// Routes
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Connected to MongoDB Typescript"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
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
