const { Stone } = require("../models/Stone");

async function getAllStones() {
    const stones = await Stone.find().lean();
    return stones;
}

async function createStone(movieData) {
    const stone = new Stone({
        name: movieData.name,
        category: movieData.category,
        color: movieData.color,
        image: movieData.image,
        location: movieData.location,
        formula: movieData.formula,
        description: movieData.description,
        likedList: []
    });
    await stone.save();
    return stone;
}

async function getStoneById(stoneId) {
    const stone = await Stone.findById(stoneId).lean();
    return stone;
}

module.exports = {
    getAllStones,
    createStone,
    getStoneById
}