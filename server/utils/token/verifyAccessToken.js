const { jwt, dotenv } = require("../libs");

const verifyAccessToken = (token) => {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
}

module.exports = verifyAccessToken;