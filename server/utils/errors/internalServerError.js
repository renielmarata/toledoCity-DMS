class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InternalServerError';
        this.statusCode = 500;
        this.status = 'error';

        Error.captureStackTract(this, this.constructor);
    }
}