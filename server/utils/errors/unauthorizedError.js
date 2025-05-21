class UnauthorizedError extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'Unauthorized',
        this.details = details;
        this.code = 401;
        

        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = UnauthorizedError;