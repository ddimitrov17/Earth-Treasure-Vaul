const { User } = require("../models/User");
const bcrypt = require('bcrypt')

async function register(email,password) {
    const existingUser=await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists!');
    };
    const user = new User({
        email: email,
        password: await bcrypt.hash(password, 10)
    });
    await user.save();
    return user;
};
async function login(email,password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return user;
}

module.exports = {
    register,
    login
}