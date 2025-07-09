const { unauthorizedError } = require("../../utils/errors");
const { verifyAccessToken } = require("../../utils/token");
const { cookieNames } = require("../../config");


const authAccessToken = async (req, res, next) => {
    try {

        console.log("1 -> authAccessToken middleware");

        const token = req?.cookies?.[cookieNames.ACCESS_TOKEN];

        if (!token) {
            console.log("access token not found");

            throw new unauthorizedError(
                'access token not found', // message
                'ACCESS_TOKEN_MISSING_ERROR', // type
                'access token is not found during authentication', // details
            );
        }


        try {
            const decoded = verifyAccessToken(token);
            req.user = decoded;
            console.log('2 -> valid access token added to req.user');
            return next();

        } catch (err) {
            throw new unauthorizedError(
                err.name === "TokenExpiredError" ? "Access Token Expired" : "Invalid Token",
                err.name,
                "token valiation failed",
            )
        }

    } catch (err) {
        return next(err);
    }
}


module.exports = authAccessToken;