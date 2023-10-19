const express = require("express");
const Post = require("../models/Products"); // new
const router = express.Router();

//home
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// Get all Products
//fetching the Product
router.get("/products", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

//Post the Products
router.post("/products", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.send(post);
});

//grabbing individual post
router.get("/products/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist" });
  }
});

//updating

router.patch("/products/:id", async (req, res) => {
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
router.delete("/products/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Product doesn't exist !" });
  }
});

//Delete all posts

router.delete("/products", async (req, res) => {
  try {
    await Post.deleteMany({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

//get products with name kw
router.get("/products/:kw", async (req, res) => {
  const keyword = req.params.kw;

  try {
    const posts = await Post.find({
      title: { $regex: keyword, $options: "i" },
    });
    res.send(posts);
  } catch (error) {
    res
      .status(500)
      .send({ error: "uh oh! there's no product with that identifer." });
  }
});

module.exports = router;
