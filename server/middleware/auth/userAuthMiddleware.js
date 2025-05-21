const userAuthMiddleware = async (err, req, res, next) => {
    console.log("user auth middleware test");
}

module.exports = userAuthMiddleware;