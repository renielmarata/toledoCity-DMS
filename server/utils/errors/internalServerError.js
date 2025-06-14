class InternalServerError extends Error {
    constructor(message, type, details) {
        super(message);
        this.name = 'InternalServerError';
        this.type = type;
        this.statusCode = 500;
        this.details = details;
        

        Error.captureStackTract(this, this.constructor);
    }
}


module.exports = InternalServerError;