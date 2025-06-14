const { unauthorizedError } = require("../../utils/errors");
const { verifyRefreshToken } = require("../../utils/token");
const { cookieNames } = require("../../config");


const authRefreshToken = async (req, res, next) => {
    try {

        const token = req?.cookies?.[cookieNames.REFRESH_TOKEN];

        if (!token) {
            console.log("access token not found");

            throw new unauthorizedError(
                'refresh token not found',
                'refresh token is not found during authentication',
            );
        }


        try {
            const decoded = verifyRefreshToken(token);
            req.user = decoded;
            console.log(decoded);

        } catch (err) {
            throw new unauthorizedError(
                err.name === "TokenExpiredError" ? "Refresh Token Expired" : "Invalid Token",
                "refresh token validation failed"
            )
        }

    } catch (err) {
        return next(err);
    }
}


module.exports = authRefreshToken;