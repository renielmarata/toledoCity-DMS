const { tokenNames } = require("../../config");

const authRefreshToken = async (req, res, next) => {
    try {
        const refreshToken = tokenNames;
        const token = req?.cookies?.[tokenNames.REFRESH_TOKEN];

        if (!req.accessToken) {
            console.log("refresh token not found");
            return next();
        }


    } catch (err) {
        console.log("auth refresh token error");
    }
}

module.exports = authRefreshToken;