const { unauthorizedError } = require("../../utils/errors");
const { verifyRefreshToken } = require("../../utils/token");
const { cookieNames } = require("../../config");


const authRefreshTokenMiddleware = async (req, res, next) => {
    try {

        console.log("1 -> authRefreshToken middleware");
        const token = req?.cookies?.[cookieNames.REFRESH_TOKEN];

        if (!token) {
            console.log("refresh token not found");

            throw new unauthorizedError(
                'refresh token not found', // message
                'REFRESH_TOKEN_MISSING', // type
                'refresh token is not found during authentication', // details
            );
        }


        try {
            const decoded = verifyRefreshToken(token);
            req.user = decoded;

        } catch (err) {
            throw new unauthorizedError(
                err.name === "TokenExpiredError" ? "Refresh Token Expired" : "Invalid Token",
                err.name,
                "token validation failed",
            )
        }

        return next();

    } catch (err) {
        return next(err);
    }
}


module.exports = authRefreshTokenMiddleware;