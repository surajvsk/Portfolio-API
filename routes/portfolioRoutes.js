const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const asyncHandler = require('../middleware/asyncHandler');

// Route to get the entire portfolio with trades
router.get('/', asyncHandler(portfolioController.getPortfolio));

// Route to get holdings in an aggregate view
router.get('/holdings', asyncHandler(portfolioController.getHoldings));

// Route to get cumulative returns
router.get('/returns', asyncHandler(portfolioController.getReturns));

module.exports = router;
