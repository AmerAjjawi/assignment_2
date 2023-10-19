const express = require("express");
const Post = require("../models/Product"); // new
const router = express.Router();

//home
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Get all Products
//fetching the Product
router.get("/Products", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

//Post the Products
router.post("/Product", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send(post);
});

//grabbing individual post
router.get("/Product/:id", async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.send(post);
});

//updating

router.patch("/Product/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (req.body.title) {
      post.title = req.body.title;
    }

    if (req.body.content) {
      post.content = req.body.content;
    }

    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//Delete post by ID
router.delete("/Product/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Product doesn't exist !" });
  }
});

//Delete all posts

router.delete("/Products", async (req, res) => {
  try {
    await Post.deleteMany({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//get products with name kw
router.get("/Products/:kw", async (req, res) => {
  const keyword = req.params.kw;

  try {
    const posts = await Post.find({
      title: { $regex: keyword, $options: 'i' } 
    });
    res.send(posts);
  } catch (error) {
    res.status(500).send({ error: "uh oh! there's no product with that identifer." });
  }
});
module.exports = router;
