const Post = require("../models/Post");

// GET all
exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

// GET one
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

// CREATE
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
};

// DELETE
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};