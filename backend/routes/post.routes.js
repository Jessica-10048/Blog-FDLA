const express = require("express");
const router = express.Router();

const {
  
  getPosts,
  getPost,
  createPost,
  deletePost
} = require("../controllers/post.controller");

router.get("/get", getPosts);
router.get("/get/:id", getPost);
router.post("/post", createPost);
router.delete("/delete/:id", deletePost);

module.exports = router;