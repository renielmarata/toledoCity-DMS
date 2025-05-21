class InternalServerError extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'InternalServerError';
        this.details = details;
        this.code = 500;
        

        Error.captureStackTract(this, this.constructor);
    }
}


module.exports = InternalServerError;