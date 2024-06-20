const { createStone } = require("../services/stoneService");

module.exports = {
    createGET: (req, res) => {
        res.render('create');
    },
    createPOST: async (req, res) => {
        const owner=req.user.id;
        await createStone(req.body,owner);
        res.redirect('/home');
    }
}