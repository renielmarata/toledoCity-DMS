const { express } = require("../../utils/libs");
const signinRouter = express.Router();
const signinController = require("../../controllers/auth/signinController");


signinRouter.post("/auth/signin", signinController);

module.exports = signinRouter;