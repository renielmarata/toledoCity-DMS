const { ObjectId } = require("mongodb");
const userModel = require("../../models/user/userModel")

const getUserById = async (userId) => {
    return await userModel.findById({_id: new ObjectId(userId)});
}

module.exports = getUserById;