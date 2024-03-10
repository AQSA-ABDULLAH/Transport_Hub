const mongoose = require("mongoose");
const BlogModal = require("../../models/Blogs");

class BlogController {
    static createBlog = async (req, res) => {
        const { image, heading, content } = req.body;
        if (!image) return res.status(400).send({ status: "failed", message: `Image URL is required` });
        if (!heading) return res.status(400).send({ status: "failed", message: `Heading is required` });
        if (!content) return res.status(400).send({ status: "failed", message: `Content is required` });

        try {
            const newBlog = new BlogModal({ image, heading, content });
            await newBlog.save();

            res.status(201).send({ status: "success", message: "Data saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save data" });
        }
    };
    
    static getBlogAll = async (req, res) => {
        try {
            const blogData = await BlogModal.find();
            res.status(200).send({ status: "success", data: blogData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get data" });
        }
    };

    static getBlog = async (req, res) => {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({status: "failed", message: `Invalid ID: ${id}`});
        try {
            const blogData = await BlogModal.findById(id);
            if (!blogData) return res.status(404).send({ status: "failed", message: "Blog not found" });
            res.status(200).send({ status: "success", data: blogData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get data" });
        }
    };
}

module.exports = BlogController;
