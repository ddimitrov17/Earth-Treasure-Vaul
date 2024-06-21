const { Stone } = require("../models/Stone");

async function getAllStones() {
    const stones = await Stone.find().lean();
    return stones;
}

async function createStone(movieData,owner) {
    const stone = new Stone({
        name: movieData.name,
        category: movieData.category,
        color: movieData.color,
        image: movieData.image,
        location: movieData.location,
        formula: movieData.formula,
        description: movieData.description,
        likedList: [],
        owner: owner
    });
    await stone.save();
    return stone;
}

async function getStoneById(stoneId) {
    const stone = await Stone.findById(stoneId).lean();
    return stone;
}

async function updateStone(stoneId,stoneData) {
    const stone = await Stone.findById(stoneId);
    stone.name=stoneData.name;
    stone.category=stoneData.category;
    stone.color=stoneData.color;
    stone.image=stoneData.image;
    stone.location=stoneData.location;
    stone.formula=stoneData.formula;
    stone.description=stoneData.description;

    stone.save();
    return stone;
};

module.exports = {
    getAllStones,
    createStone,
    getStoneById,
    updateStone
}