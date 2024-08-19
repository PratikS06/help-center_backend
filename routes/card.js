const express = require('express');
const { createcard, getAllCards, getACard } = require('../controllers/card');
const router = express.Router();


// Create a card
router.post('/create/card', createcard);

// Get all cards
router.get('/cards', getAllCards);

// Get a specific card by title
router.get('/card/:title', getACard);

module.exports = router;
