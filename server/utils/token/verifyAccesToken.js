const { jwt, dotenv } = require("../libs");

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}


module.exports = verifyAccessToken;