class BadRequestError extends Error {
    constructor(message, type, details) {
        super(message);
        this.name = 'BadRequestError';
        this.type = type;
        this.statusCode = 400;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = BadRequestError;