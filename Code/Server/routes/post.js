import express from "express"
const router = express.Router()

import { getAllPosts } from "../controllers//parcelManagement/postController.js"

import { auth } from "../middleware/auth.js"

// these routes can only be accessed by authenticated users
router.get('/get-all-posts', auth, getAllPosts)




export default router