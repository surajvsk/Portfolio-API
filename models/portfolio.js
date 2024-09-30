const mongoose = require('mongoose');
const tradeSchema = require('./trade'); // Import the Trade model

const portfolioSchema = new mongoose.Schema({
    trades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trade' }]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
