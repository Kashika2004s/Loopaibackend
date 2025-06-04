const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ingestRoute = require('./routes/ingest');

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/', ingestRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => console.log('MongoDB Connection Error:', err));
