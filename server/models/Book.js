const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    isChecked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Book", BookSchema);