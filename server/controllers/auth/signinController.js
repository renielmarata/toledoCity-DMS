const { authenticateUser } = require("../../services");

const signinController = async (req, res) => {
    try {
        // getUser service
            // ++ createAccessToken utils and response statusCode 200
        // -- respond 401

        const { username, password } = req.body;
        const user = await authenticateUser(username, password);
        console.log(user);
        
        

    } catch (err) {
        console.log(err);
    }
}

module.exports = signinController;