const refreshAccessTokenController = require("../../controllers/auth/refreshAccessTokenController");
const { authRefreshTokenMiddleware } = require("../../middleware");
const { express } = require("../../utils/libs");
const refreshAccessTokenRouter = express.Router();

refreshAccessTokenRouter.post("/auth/refreshAccessToken", authRefreshTokenMiddleware, refreshAccessTokenController);


module.exports = refreshAccessTokenRouter;