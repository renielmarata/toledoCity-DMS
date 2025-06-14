class UnauthorizedError extends Error {
    constructor(message, type, details) {
        super(message);
        this.name = 'Unauthorized',
        this.type = type,
        this.statusCode = 401;
        this.details = details;
        
        

        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = UnauthorizedError;