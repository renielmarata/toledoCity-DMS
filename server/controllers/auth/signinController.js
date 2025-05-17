const signinController = async (req, res) => {
    try {

        console.log("signin controller test");
        const user = await findUser(req.body.username, req.body.password);
        console.log(user);
    } catch (err) {
        console.log(signinController);
        console.log(err);
    }
}

module.exports = signinController;