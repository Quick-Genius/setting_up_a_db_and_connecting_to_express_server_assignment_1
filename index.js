const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3010;

// Middleware to serve static files
app.use(express.static('static'));

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Failed:', err));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});