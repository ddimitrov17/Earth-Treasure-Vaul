const mongoose = require('mongoose');
const { User } = require('../models/User');
const { Stone } = require('../models/Stone');

const projectName = 'Earth-Treasure-Vaul';
const connectionString = `mongodb://localhost:27017/${projectName}`;

async function configDatabase() {
    await mongoose.connect(connectionString);
    // await migrateStones();
    console.log('Database connected successfully!');
}

// async function migrateStones() {
//     const firstUser = await User.findOne();
//     await Stone.updateMany({}, { $set: { owner: firstUser._id } });
// }

module.exports = { configDatabase };