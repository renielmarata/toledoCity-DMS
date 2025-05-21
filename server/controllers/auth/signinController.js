const { jwt } = require("../../utils/libs");
const userModel = require("../../models/user/userModel");
const { findUser } = require("../../services");
const { notFoundError } = require("../../utils/errors");
const { createAccessToken, createRefreshToken } = require("../../utils/token");

const signinController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        const user = await findUser(username, password);

        if (!user) {
            throw new notFoundError(
                "User not found",
                "Given credentials do not match any user",
            );
        }

        if (!user.id || !user.username) {
            throw new notFoundError(
                "User credentials not Found",
                "User credentials needed for token creation not found",
            )
        }


        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);

        res.cookie('toledo_accessToken', accessToken, {
            httpOnly: true,
            securet: process.env.NODE_ENV === "production",
            sameSite: true,
            maxAge: 3 * 60 * 60 * 1000,
        })

        res.cookie('toledo_refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            message: 'User signed in successfully',
        })


    } catch (err) {
        next(err);
    }
}

module.exports = signinController;