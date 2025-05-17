const dbConnect = () => {
    try {

    } catch (err) {
        console.log("Database Connection Error "+err);
        process.exit(1);
    }
}

module.exports = dbConnect;