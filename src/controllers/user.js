module.exports = {
    registerGET: (req,res) => {
        res.render('register');
    },
    loginGET: (req,res) => {
        res.render('login');
    }
}