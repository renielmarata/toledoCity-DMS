const errorHandler = (err, req, res, next) => {
    console.log("-------------------------------");
    console.log('error name   -> '+err.name);
    console.log('error code   -> '+err.code);
    console.log('error message -> '+err.message);
    console.log('error details -> '+err.details);
    console.log("-------------------------------");
    console.log(err);

    return res.status(err.code || 500).json({
        success: false,
        error: {
            code: err.code,
            message: err.message,
        }
    })
    
}

module.exports = errorHandler;