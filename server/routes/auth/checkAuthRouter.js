const { express } = require("../../utils/libs");
const checkAuthRouter = express.Router();
const checkAuthController = require("../../controllers/auth/checkAuthController");
const { authAccessToken } = require("../../middleware");



checkAuthRouter.post("/auth/me", authAccessToken, checkAuthController);

module.exports = checkAuthRouter;