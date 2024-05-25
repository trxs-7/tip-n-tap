import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import session from "express-session";
dotenv.config();
const config = {
  CLIENT_ID: process.env.CLIENT_ID as string,
  CLIENT_SECRET: process.env.CLIENT_SECRET as string,
  // COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  // COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

passport.use(
  new Strategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user profile to your database here
      console.log("Google profile", profile);
      return done(null, profile);
    }
  )
);
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

//read the session from the cookie
passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});
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
