const { createStone, getStoneById, updateStone, deleteStone } = require("../services/stoneService");

module.exports = {
    createGET: (req, res) => {
        res.render('create');
    },
    createPOST: async (req, res) => {
        const owner = req.user.id;
        await createStone(req.body, owner);
        res.redirect('/home');
    },
    editGET: async (req, res) => {
        const stone = await getStoneById(req.params.id);
        res.render('edit', { stone });
    },
    editPOST: async (req,res) => {
        const id=req.params.id;
        const stoneData=req.body;
        await updateStone(id,stoneData);
        res.redirect('/details/' + id);
    },
    deleteGET: async (req,res) => {
        const stone = await getStoneById(req.params.id);
        res.render('delete', { stone });
    },
    deletePOST: async (req,res) => {
        const stoneId=req.params.id;
        await deleteStone(stoneId);
        res.redirect('/home');
    }
}