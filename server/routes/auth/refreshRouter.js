const refreshController = require("../../controllers/auth/refreshController");
const { express } = require("../../utils/libs");
const refreshRouter = express.Router();

refreshRouter.post("/auth/refresh", refreshController);


module.exports = refreshRouter;