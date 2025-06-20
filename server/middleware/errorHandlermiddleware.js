const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("-------------------------------");
    console.log('error name   -> '+err.name);
    console.log('error type   -> '+err.type);
    console.log('error statusCode   -> '+err.statusCode);
    console.log('error message -> '+err.message);
    console.log('error details -> '+err.details);
    console.log("-------------------------------");



    return res.status(err.statusCode || 500).json({
        success: false,
        error: {
            type: err.type || 'InternalServerError',
            code: err.code || 500,
            message: err.message || "Internal Server Error",
        }
    })
    
}

module.exports = errorHandlerMiddleware;