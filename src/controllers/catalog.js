const { getAllStones, getStoneById } = require("../services/stoneService");

module.exports = {
    home: async (req, res) => {
        const stones = await getAllStones();
        res.render('home', { stones });
    },
    dashboard: (req, res) => {
        res.render('dashboard');
    },
    search: (req, res) => {
        res.render('search');
    },
    details: async (req, res) => {
        const stone = await getStoneById(req.params.id);
        const currentlyLoggedInUser = req?.user?.id;
        let isOwner = currentlyLoggedInUser == stone.owner.toString() && currentlyLoggedInUser != undefined;
        let isLiked= stone.likedList.includes(currentlyLoggedInUser);
        res.render('details', { stone, 
                                isOwner, 
                                isLiked,
                            currentlyLoggedInUser });
    }
};