const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');
const asyncHandler = require('../middleware/asyncHandler');
// Route to add a new trade
router.post('/addTrade', asyncHandler(tradeController.addTrade));

// Route to update an existing trade
router.post('/updateTrade', asyncHandler(tradeController.updateTrade));

// Route to delete a trade
router.post('/removeTrade', asyncHandler(tradeController.removeTrade));

module.exports = router;
