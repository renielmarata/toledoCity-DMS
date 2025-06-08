const { getUser } = require("../../services");
const { unauthorizedError } = require("../../utils/errors");

const checkAuthController = async (req, res, next) => {
    try {
      const user = await getUser(req.user.id);

      if (!user) {
        throw new unauthorizedError(
          "User not found",
          "The user not found during getUser service call",
        )
      }

      return res.status(200).json({
        success: true,
        message: "User is authenticated",
        user,
      })

    } catch (err) {
        next(err);
    }
}


module.exports = checkAuthController;