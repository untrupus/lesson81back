const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    shortUrl: String,
    originalUrl: {
        type: String,
        required: true
    }
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;

