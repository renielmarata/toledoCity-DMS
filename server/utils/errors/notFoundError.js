class NotFoundError extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'NotFoundError';
        this.details = details;
        this.code = 404;
        

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = NotFoundError;