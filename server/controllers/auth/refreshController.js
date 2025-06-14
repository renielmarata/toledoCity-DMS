const { cookieNames } = require("../../config");
const { getUser } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");
const { verifyRefreshToken, createAccessToken } = require("../../utils/token");

const refreshController = async (req, res, next) => {
    try {
        // validate refresh token
            // +++ create access token
            // --- reply 401
        const refreshToken = req.user;

        /** handle error return */
        const accessToken = createAccessToken(refreshToken.id);

        if (!accessToken) {

        }

        res.cookie(cookieNames.REFRESH_TOKEN, accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: 'token successfully refreshed'
        })

    } catch (err) {
        next(err);
    }
}


module.exports = refreshController;