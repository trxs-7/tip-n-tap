import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import usersService from "../service/users.service.js";
import dotenv from "dotenv";
dotenv.config();
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
};
passport.use(new Strategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await usersService.GetUser(profile.id);
        if (!user) {
            const currentTime = new Date(Date.now());
            await usersService.addUser({
                googleId: profile.id,
                lastReview: new Date(0),
            });
        }
        else {
            if (await !usersService.canReviewAgain(profile.id)) {
                throw new Error("You have left a review too recently!");
            }
        }
        done(null, profile);
    }
    catch (error) {
        done(error);
    }
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
//read the session from the cookie
passport.deserializeUser((obj, done) => {
    done(null, obj);
});
export default passport;
