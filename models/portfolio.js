// models/portfolio.js
const mongoose = require('mongoose');
const connection = require('../config/db'); // Import the connection pool

const portfolioSchema = new mongoose.Schema({
    trades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trade' }]
}, { strictPopulate: false });

const Portfolio = connection.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
