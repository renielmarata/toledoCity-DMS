const { getUserById } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");

const checkAuthController = async (req, res, next) => {
    try {

      console.log("3 -> received in check controller");
      console.log("4 -> send response statusCode 200");

      return res.status(200).json({
        sucess: true,
        message: 'authentication success',
      })

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;