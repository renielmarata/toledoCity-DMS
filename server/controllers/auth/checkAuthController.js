const { getUserById } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");

const checkAuthController = async (req, res, next) => {
    try {

      console.log("3 -> received in check controller");
      console.log("4 -> send response statusCode 200");

      const  user = await getUserById(req.user.id);

      const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      }

      return res.status(200).json({
        sucess: true,
        message: 'authentication success',
        user: userData,
      })

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;