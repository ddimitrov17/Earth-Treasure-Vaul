const { Schema, SchemaTypes, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = model('User', userSchema);

module.exports = { User };