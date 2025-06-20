const userModel  = require("../../models/user/userModel");
const { bcrypt, dotenv } = require("../../utils/libs");

const authenticatedUser = async (username, password) => {

    const user = await userModel.findOne({ username });

    if (!user) {
        return null;
    }


    const isMatch = await bcrypt.compare(password, user?.password);
    

    return isMatch ? user : null;

}

module.exports = authenticatedUser;