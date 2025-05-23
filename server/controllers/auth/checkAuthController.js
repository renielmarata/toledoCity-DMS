const { unauthorizedError } = require("../../utils/errors");
const { jwt, dotenv } = require("../../utils/libs");
const { verifyAccessToken, verifyRefreshToken } = require("../../utils/token");

const checkAuthController = async (req, res, next) => {
    try {
        const accessToken = req?.cookies?.toledo_accessToken;
        const refreshToken = req?.cookies?.toledo_refreshToken;

        if (!accessToken && !refreshToken) {
            throw new unauthorizedError(
                'tokens not found',
                'authentication tokens in checkAuthController'
            )
        }


        /** access token */
        try {
            if (accessToken) {
                const verifiedAccessToken = verifyAccessToken(accessToken);
                return res.status(200).json({
                    success: true,
                    message: 'authenticated',
                })
            }
        } catch (err) {
            if (err.name !== 'TokenExpiredError') {
                throw new unauthorizedError(
                    'invalid token',
                    'access token '+err.message+' in checkAuthController',
                )
            }
        }


        /** refresh token */
        try {
            if (refreshToken) {
                const verifiedRefreshToken = verifyRefreshToken(refreshToken);

            }

        } catch (err) {
            if (err.name !== "TokenExpiredError") {
                throw new unauthorizedError(
                    'token not found',
                    'tokens are not found in checkAuthController',
                )
            }
        }

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;