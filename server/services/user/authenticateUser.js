const { userModel } = require("../../models")

const authenticateUser = async (username, password) => {
    return await userModel.findOne({username}).populate('role');
}


module.exports = authenticateUser;