const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    symbol: String // RELIANCE, HDFCBANK
});
module.exports = mongoose.model('Stock', stockSchema);
