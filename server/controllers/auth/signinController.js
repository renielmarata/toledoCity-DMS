const userModel = require("../../models/user/userModel");
const { findUser } = require("../../services");

const signinController = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await findUser(username, password);
    } catch (err) {
        console.log(signinController);
        console.log(err);
    }
}

module.exports = signinController;