const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    minimum: {
        type: Number
    },
    seller: {
        type: String,

    },
    status: {
        type: String,
        default: "Not Dispached"

    },
    price: {
        type: Number
    }
    ,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);