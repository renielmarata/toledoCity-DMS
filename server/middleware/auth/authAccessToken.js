const { unauthorizedError } = require("../../utils/errors");
const { jwt, dotenv } = require("../../utils/libs");
const { verifyAccessToken } = require("../../utils/token");
const { cookieNames } = require("../../config");


const authAccessToken = async (req, res, next) => {
    try {
        const accessToken = cookieNames.ACCESS_TOKEN;

        const token = req?.cookies?.[accessToken];

        if (!token) {
            console.log("access token not found");
            return next();
        }


        try {
            const decoded = verifyAccessToken(token);
            req.user = decoded;
            console.log('valid access token');

        } catch (err) {
            if (err.name !== 'TokenExpiredError') {
                throw new unauthorizedError(
                    'invalid token',
                    'invalid access token '+err.name,
                )
            } else {
                console.log('accessToken '+err.name);
            }
        }

    } catch (err) {
        return next(err);
    }
}


module.exports = authAccessToken;