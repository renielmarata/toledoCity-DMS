const { express } = require("../../utils/libs");
const checkAuthRouter = express.Router();
const checkAuthController = require("../../controllers/auth/checkAuthController");
const { authAccessTokenMiddleware } = require("../../middleware");



checkAuthRouter.post("/auth/checkAuth", authAccessTokenMiddleware, checkAuthController);

module.exports = checkAuthRouter;