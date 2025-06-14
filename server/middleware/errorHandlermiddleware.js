const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("-------------------------------");
    console.log('error name   -> '+err.name);
    console.log('error type   -> '+err.type);
    console.log('error statusCode   -> '+err.statusCode);
    console.log('error message -> '+err.message);
    console.log('error details -> '+err.details);
    console.log("-------------------------------");



    return res.status(err.code || 500).json({
        success: false,
        error: {
            type: err.type,
            code: err.code,
            message: err.message,
        }
    })
    
}

module.exports = errorHandlerMiddleware;