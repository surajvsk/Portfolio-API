const mongoose = require('mongoose');
const connection = require('../config/db'); // Import the connection pool
const tradeSchema = new mongoose.Schema({
    stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
    type: { type: String, enum: ['BUY', 'SELL'] },
    quantity: Number,
    price: Number,
    date: Date
});
const Trade = connection.model('Trade', tradeSchema);

module.exports = Trade;
