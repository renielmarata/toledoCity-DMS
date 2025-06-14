const { getUserById } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");

const checkAuthController = async (req, res, next) => {
    try {

      console.log('2 -> check auth controller');

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;