const express = require('express');
const router = express.Router();
const Data = require('../models/data');

router.post('/ingest', async (req, res) => {
  try {
    const { order_id, item, price } = req.body;

    if (!order_id || !item || !price) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const newData = new Data({ order_id, item, price });
    await newData.save();

    res.status(200).json({ message: 'Saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; // ✅ make sure you're exporting router
