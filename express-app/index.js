require('dotenv').config(); // Must be at the very top

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());

// Use your routes - update the path as needed
const shortUrlsRouter = require('./routes/shorturls');
app.use('/api/shorturls', shortUrlsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
