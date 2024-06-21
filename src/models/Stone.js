const { Schema, SchemaTypes, model } = require('mongoose');

const stoneSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    formula: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    likedList: {
        type: Array,
        ref: 'User',
        default: []
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }
});
const Stone = model('Stone', stoneSchema);

module.exports = { Stone };