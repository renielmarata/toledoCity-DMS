const userModel  = require("../../models/user/userModel");

const findUser = async (username, password) => {

    const user = await userModel.find({username});

    return user;
}

module.exports = findUser;