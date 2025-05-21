class BadRequestError extends Error {
    constructor(message, details=null) {
        super(message);
        this.name = 'BadRequestError';
        this.details = details;
        this.code = 400;

        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = BadRequestError;