const { jwt } = require("../libs")

const createRefreshToken = (id, username) => {
    return jwt.sign(
        { id, username },
        process.env.SECRET_KEY,
        {
            expiresIn: '7d',
        }
    )
}

module.exports = createRefreshToken;