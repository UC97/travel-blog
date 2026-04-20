const express = require('express');
const fs = require('fs');
const router = express.Router();

require('dotenv').config();
const DATA_FILE = process.env.DATA_FILE;


// Helper: read data
function readPosts() {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

// Helper: write data
function writePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
}

// GET all posts
router.get('/', (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

// POST new post
router.post('/', (req, res) => {
  const posts = readPosts();

  const newPost = {
    id: posts.length + 1,
    ...req.body
  };

  posts.push(newPost);
  writePosts(posts);

  res.json(newPost);
});

module.exports = router;
