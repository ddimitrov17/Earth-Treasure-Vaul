const { createToken } = require("../services/tokenService");
const { register, login } = require("../services/userService");

module.exports = {
    registerGET: (req, res) => {
        res.render('register');
    },
    loginGET: (req, res) => {
        res.render('login');
    },
    registerPOST: async (req, res) => {
        const userData = req.body;
        const user = await register(userData);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/home');
    },
    loginPOST: async (req, res) => {
        const userData = req.body;
        const user = await login(userData.email, userData.password);
        console.log(`Logged in as ${userData.email}`);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/home');
    }
}