const { express } = require("../../utils/libs.js");
const signinRouter = express.Router();
const { signinController } = require("../../controllers/index.js");


signinRouter.post("/auth/signin", signinController);


module.exports = signinRouter;