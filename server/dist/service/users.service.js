import userModel from "../model/users.model.js";
const canReviewAgain = async (userId) => {
    const user = await userModel.findOne({ googleId: userId });
    if (user) {
        const difference = Math.abs(Date.now() - user.lastReview.getTime());
        const differenceMinutes = Math.floor(difference / (1000 * 60));
        if (differenceMinutes > 5) {
            return true;
        }
        return false;
    }
    return false;
};
const GetUser = async (userId) => {
    return await userModel.findOne({ googleId: userId });
};
const addUser = async (newUser) => {
    try {
        return await userModel.create(newUser);
    }
    catch (err) {
        throw new Error(err);
    }
};
export default { canReviewAgain, GetUser, addUser };
