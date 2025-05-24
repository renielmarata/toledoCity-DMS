const { tokenNames } = require("../../config");
const { unauthorizedError } = require("../../utils/errors");
const { jwt, dotenv } = require("../../utils/libs");
const { verifyAccessToken } = require("../../utils/token");


const authAccessToken = async (req, res, next) => {
    try {
        const accessToken = tokenNames.ACCESS_TOKEN;

        const token = req?.cookies?.[accessToken];

        if (!token) {
            console.log("access token not found");
            return next();
        }


        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log('valid access token');

            req[accessToken] = decoded;
            return next();

        } catch (err) {
            if (err.name !== 'TokenExpiredError') {
                throw new unauthorizedError(
                    'invalid token',
                    'invalid access token '+err.name,
                )
            }
        }

    } catch (err) {
        return next(err);
    }
}


module.exports = authAccessToken;