const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 256 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 256 },
    videoId: { type: String, maxLength: 256 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
