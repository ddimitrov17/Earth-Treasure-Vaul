const { User } = require("../models/User");
const bcrypt = require('bcrypt')

async function register(userData) {
    const user = new User({
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10)
    });
    await user.save();
    return user;
}

module.exports = {
    register
}