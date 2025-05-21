const userModel = require("../../models/user/userModel");
const { findUser } = require("../../services");
const NotFoundError = require("../../utils/errors/notFoundError");
const { createAccessToken } = require("../../utils/token");

const signinController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        const user = await findUser(username, password);

        if (!user) {
            throw new NotFoundError(
                "User not found",
                "Error thrown after user not found in the database",
            );
        }


    } catch (err) {
        next(err);
    }
}

module.exports = signinController;