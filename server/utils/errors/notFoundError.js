class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;
        this.status = 'fail';

        Error.captureStackTrace(this, this.constructor);
    }
}