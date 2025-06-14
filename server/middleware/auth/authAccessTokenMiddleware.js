const { unauthorizedError } = require("../../utils/errors");
const { verifyAccessToken } = require("../../utils/token");
const { cookieNames } = require("../../config");


const authAccessToken = async (req, res, next) => {
    try {

        const token = req?.cookies?.[cookieNames.ACCESS_TOKEN];

        if (!token) {
            console.log("access token not found");

            throw new unauthorizedError(
                'access token not found', // message
                'ACCESS_TOKEN_MISSING', // type
                'access token is not found during authentication', // details
            );
        }


        try {
            const decoded = verifyAccessToken(token);
            req.user = decoded;
            console.log('valid access token');
            return next();

        } catch (err) {
            console.log(err.name);
            throw new unauthorizedError(
                err.name === "TokenExpiredError" ? "Access Token Expired" : "Invalid Token",
                "access token validation failed"
            )
        }

    } catch (err) {
        return next(err);
    }
}


module.exports = authAccessToken;