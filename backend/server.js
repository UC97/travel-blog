require('dotenv').config();

const express = require('express');
const cors = require('cors');
const postsRoute = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRoute);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log('Backend running on http://localhost:${PORT}');
});

