const { unauthorizedError } = require("../utils/errors");

const validatorMiddleware = (schema) => (req, res, next) => {
    try {
        console.log('1 -> validator middleware');
    
        const { error } = schema.validate(req.body, { abortEarly: true });

        if (error) {
            console.log(error);
            throw new unauthorizedError(
                "Invalid username or password", // message parameter
                error.name, // error type parameter
                'signin credentials validated failed during signin' // details parameter
            )
        } else {
            req.signinCredentials = req.body;
            next();
        }

    } catch (err) {
        console.log("3 -> signin schema error");
        next(err);
    }
}

module.exports = validatorMiddleware;