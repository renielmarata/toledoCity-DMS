const { express } = require("../../utils/libs");
const signinRouter = express.Router();
const signinController = require("../../controllers/auth/signinController");
const { validatorMiddleware } = require("../../middleware");
const { signinSchema } = require("../../validator");


signinRouter.post("/auth/signin", validatorMiddleware(signinSchema), signinController);

module.exports = signinRouter;