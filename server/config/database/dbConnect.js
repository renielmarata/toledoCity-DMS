const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.dbURL, { family: 4 });
        console.log('Successfully Connected to Database');
    } catch (err) {
        console.log("Database Connection Error "+err);
        process.exit(1);
    }
}

module.exports = dbConnect;  