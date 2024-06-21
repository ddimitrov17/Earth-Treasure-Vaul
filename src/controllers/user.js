const { Stone } = require("../models/Stone");
const { getStoneById } = require("../services/stoneService");
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
        const { email, password, repassword } = req.body;
        if (!email || email.length < 10) {
            let error = 'Invalid email input!'
            res.render('register', { error });
            return;
        };
        if (password.length < 4) {
            let error = 'Password should be at least 4 symbols!';
            res.render('register', { error });
            return;
        }
        if (password!= repassword) {
            let error = 'Passwords do not match!';
            res.render('register', { error });
            return;
        }
        const user = await register(email, password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/home');
    },
    loginPOST: async (req, res) => {
        const { email, password } = req.body;
        const user = await login(email, password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/home');
    },
    logout: (req, res) => {
        res.clearCookie('token');
        res.redirect('/home');
    },
    like: async (req, res) => {
        const currentStoneId = req.params.stoneId;
        let stoneInDB = await Stone.findById(currentStoneId);
        if (!stoneInDB.likedList.includes(req.params.userId)) {
            stoneInDB.likedList.push(req.params.userId);
        }
        await stoneInDB.save();
        res.redirect(`/details/${currentStoneId}`);
    }
}