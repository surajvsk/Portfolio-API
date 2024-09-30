const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');
// Route to add a new trade
router.post('/addTrade', tradeController.addTrade);

// Route to update an existing trade
router.post('/updateTrade', tradeController.updateTrade);

// Route to delete a trade
router.post('/removeTrade', tradeController.removeTrade);

module.exports = router;
