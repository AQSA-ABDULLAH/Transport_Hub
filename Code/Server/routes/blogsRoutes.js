const express = require('express');
const BlogController = require("../controllers/blogs&news/blogController");
const router = express.Router();

//PROTECTED ROUTES
router.post("/create-blog", BlogController.createBlog);
router.get("/get-blog/:id", BlogController.getBlog);

//PUBLIC ROUTES
router.get("/get-blog", BlogController.getBlogAll);


module.exports = router;