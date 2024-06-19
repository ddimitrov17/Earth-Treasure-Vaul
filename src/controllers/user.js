const { createToken } = require("../services/tokenService");
const { register } = require("../services/userService");

module.exports = {
    registerGET: (req,res) => {
        res.render('register');
    },
    loginGET: (req,res) => {
        res.render('login');
    },
    registerPOST: async (req,res) => {
        const userData=req.body;
        const user = await register(userData);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/home');
    }
}