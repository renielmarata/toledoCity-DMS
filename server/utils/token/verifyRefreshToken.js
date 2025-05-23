const { jwt, dotenv } = require("../libs");

const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}


module.exports = verifyRefreshToken;