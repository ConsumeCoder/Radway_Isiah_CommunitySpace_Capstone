const express = require("express");
const router = express.Router();

const post = require("../controllers/post.js");

router.get("/api/posts/:id", post.getpostById);

router.get("/api/posts", post.getposts);

router.post("/api/posts", post.newPost);

router.delete("/posts/:id", post.deletepost);

router.put("/api/posts", post.updatepost);

module.exports = router;
