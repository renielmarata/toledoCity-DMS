const userModel  = require("../../models/user/userModel");
const { bcrypt } = require("../../utils/libs");

const findUser = async (username, password) => {

    const data = await userModel.find({username});

    for (const user of data) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch){
            return user;
        }
    }

    return null;

}

module.exports = findUser;