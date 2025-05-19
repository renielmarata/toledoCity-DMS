class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized',
        this.statusCode = 401;
        this.status = 'fail';

        Error.captureStackTrace(this, this.constructor);
    }
}