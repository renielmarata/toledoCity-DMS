const { cookieNames } = require("../../config");
const { getUserById } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");
const { verifyRefreshToken, createAccessToken } = require("../../utils/token");

const refreshAccessTokenController = async (req, res, next) => {
    try {
        // check userID in database
            // +++ create access token respond with 200
            // --- respond with 401
        
        console.log("2 -> refreshAccessTokenController");
        
        const refreshToken = req.user;
        const user = await getUserById(refreshToken.id);

        if (!user) {
            throw new unauthorizedError(
                "Validation Failed", //message
                "TOKEN_MISSING",     //type
                "Tokens not found during refresh request", //details
            )
        }

        const newAccessToken = createAccessToken(refreshToken.id);

        console.log("3 -> response 200");

        res.cookie(cookieNames.ACCESS_TOKEN, newAccessToken);
        return res.status(200).json({
            success: true,
            message: 'authentication sucess',
        })



    } catch (err) {
        next(err);
    }
}


module.exports = refreshAccessTokenController;