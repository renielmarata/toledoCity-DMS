const { jwt } = require("../libs")

const createRefreshToken = ({id}) => {
    return jwt.sign(
        { id },
        process.env.SECRET_KEY,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
        }
    )
}

module.exports = createRefreshToken;