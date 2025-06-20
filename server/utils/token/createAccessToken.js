const { badRequestError } = require('../errors')
const { dotenv, jwt } = require("../libs");

const createAccessToken = (id) => {
    return jwt.sign(
        { id },
        process.env.SECRET_KEY,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        }
    )

}


module.exports = createAccessToken;