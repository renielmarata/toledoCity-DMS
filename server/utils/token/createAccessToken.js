const { badRequestError } = require('../errors')
const { dotenv, jwt } = require("../libs");

const createAccessToken = (id) => {
    return jwt.sign(
        { id },
        process.env.SECRET_KEY,
        {
            expiresIn: '3s', /** cause some errors when process.env is used */
        }
    )
}


module.exports = createAccessToken;