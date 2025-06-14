class NotFoundError extends Error {
    constructor(message, type, details) {
        super(message);
        this.name = 'NotFoundError';
        this.type = type;
        this.statusCode = 404;
        this.details = details;
        

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = NotFoundError;