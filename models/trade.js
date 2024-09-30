const mongoose = require('mongoose');
const tradeSchema = new mongoose.Schema({
    stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
    type: { type: String, enum: ['BUY', 'SELL'] },
    quantity: Number,
    price: Number,
    date: Date
});
module.exports = mongoose.model('Trade', tradeSchema);
