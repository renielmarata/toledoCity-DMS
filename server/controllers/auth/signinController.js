const { jwt, dotenv } = require("../../utils/libs");
const userModel = require("../../models/user/userModel");
const { authenticateUser, getUser } = require("../../services");
const { notFoundError, unauthorizedError } = require("../../utils/errors");
const { createAccessToken, createRefreshToken } = require("../../utils/token");
const { cookieNames } = require("../../config");

const signinController = async (req, res, next) => {
     try {
        // check username and password
        console.log('2 -> received in signin controller');

        const { username, password } = req.signinCredentials;

        const user = await authenticateUser(username, password);

        if (!user) {
         throw new unauthorizedError(
            'Invalid username or password', // message
            'INVALID_CREDENTIALS', // type
            'signin credentials validation failed', // details
         )
        }

        // create access token
        // create refresh token

        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id, user.username);



        res.cookie(cookieNames.ACCESS_TOKEN, accessToken, {
         httpOnly: true,
         //secure: process.env.NODE_ENV === 'production',
         //sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
         maxAge: 30 * 1000,
        })

        res.cookie(cookieNames.REFRESH_TOKEN, refreshToken, {
         httpOnly: true,
         //secure: process.env.NODE_ENV === 'production',
         //sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
         maxAge: 30 * 60 * 1000,
        })

        console.log('3 -> responded statusCode 200');

        return res.status(200).json({
         success: true,
         message: 'successfully authenticated',
        })

     } catch (err) {
        next(err);
     }
}

module.exports = signinController;