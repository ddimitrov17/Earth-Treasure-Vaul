const mongoose = require('mongoose');
require('../models/Stone');
require('../models/User');

const projectName = 'Earth-Treasure-Vaul';
const connectionString = `mongodb://localhost:27017/${projectName}`;

async function configDatabase() {
    await mongoose.connect(connectionString);
    console.log('Database connected successfully!');
}

module.exports = { configDatabase };