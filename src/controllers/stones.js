const { createStone } = require("../services/stoneService");

module.exports = {
    createGET: (req, res) => {
        res.render('create');
    },
    createPOST: async (req, res) => {
        await createStone(req.body);
        res.redirect('/home');
    }
}