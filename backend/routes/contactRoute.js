const express = require('express');
const router = express.Router();
const ContactModel = require('../models/Contact'); // adjust the path if different

// POST - Submit a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newMessage = new ContactModel({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
