const { createStone, getStoneById, updateStone, deleteStone } = require("../services/stoneService");

module.exports = {
    createGET: (req, res) => {
        res.render('create');
    },
    createPOST: async (req, res) => {
        let { name, category, color, image, location, formula, description } = req.body;
        let errors = {
            name: name.length >= 2,
            category: category.length >= 3,
            color: color.length >= 2,
            formula: formula.lenght >= 3 && formula.length <= 30,
            location: location.length >= 5 && location.length <= 15,
            description: description.length >= 10,
            image: image.startsWith('http://') || image.startsWith('https://')
        };
        let errorsToDisplay = [];
        for (let currentProperty in errors) {
            if (errors[currentProperty] == false) {
                errorsToDisplay.push(currentProperty);
            }
        }
        if (errorsToDisplay.length != 0) {
            res.render('create', { errorsToDisplay });
            return;
        }
        const owner = req.user.id;
        await createStone(req.body, owner);
        res.redirect('/home');
    },
    editGET: async (req, res) => {
        const stone = await getStoneById(req.params.id);
        res.render('edit', { stone });
    },
    editPOST: async (req, res) => {
        const id = req.params.id;
        const stoneData = req.body;
        await updateStone(id, stoneData);
        res.redirect('/details/' + id);
    },
    deleteGET: async (req, res) => {
        const stone = await getStoneById(req.params.id);
        res.render('delete', { stone });
    },
    deletePOST: async (req, res) => {
        const stoneId = req.params.id;
        await deleteStone(stoneId);
        res.redirect('/home');
    }
}