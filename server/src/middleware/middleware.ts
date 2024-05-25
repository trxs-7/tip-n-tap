import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import passport from "../utils/passport-setup.js";
import session from "express-session";

const app = express();
app.use(
  session({
    secret: "your-session-secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
