const mongoose = require("mongoose");

//Defining Schema
const blogsSchema = new mongoose.Schema({
    image: { type: String, trim: true },
    heading: { type: String, trim: true },
    category: {type: String, trim: true},
    writtenby: {type: String, trim: true},
    content: { type: String, trim: true },
}, {
    timestamps: true
});

//CREATING MODAL
const BlogsModal = mongoose.model('Blogs', blogsSchema);
module.exports = BlogsModal;