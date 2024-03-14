const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const BlogController = require("../controllers/blogs&news/blogController");

const storage = multer.diskStorage({
    destination: (cb) => {
        cb(null)
    },
    filename: (file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

//PROTECTED ROUTES
router.post("/create-blog", upload.single('carImage'), BlogController.createBlog);
router.get("/get-blog/:id", BlogController.getBlog);

//PUBLIC ROUTES
router.get("/get-blog", BlogController.getBlogAll);


module.exports = router;