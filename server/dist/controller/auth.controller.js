import passport from "passport";
export const googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
});
export const googleAuthCallback = passport.authenticate("google");
export const redirectToHome = (req, res) => {
    res.redirect("http://localhost:5173");
};
