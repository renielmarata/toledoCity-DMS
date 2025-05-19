const userModel = require("../../models/user/userModel");
const { findUser } = require("../../services");

const signinController = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await findUser(username, password);

        if (!user) {
            throw new notFoundError("user not found");
        }

        return user;
        
    } catch (err) {
        return res.status(err.status || 500).json({
            message: err.message || 'InternalServerError',
            error: {
                name: err.name || 'Internal Server Error',
                message: 
            }
        })
    }
}

module.exports = signinController;