const { tokenNames } = require("../../config");

const authRefreshToken = async (req, res, next) => {
    try {
        if (req[tokenNames.ACCESS_TOKEN]) {
            console.log(req[tokenNames.ACCESS_TOKEN]);
        }


    } catch (err) {
        console.log("auth refresh token error");
    }
}

module.exports = authRefreshToken;