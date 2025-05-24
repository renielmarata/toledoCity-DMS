const { unauthorizedError } = require("../../utils/errors");
const { jwt, dotenv } = require("../../utils/libs");

const checkAuthController = async (req, res, next) => {
    try {
        console.log("check auth controller");


        

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;