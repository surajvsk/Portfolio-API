const mongoose = require('mongoose');
const connection = require('../config/db'); // Import the connection pool
// const Schema = mongoose.Schema;

// // Define Stock Schema
// const stockSchema = new Schema({
//   symbol: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   trades: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Trade'
//     }
//   ]
// });

// // Create Stock model using the connection pool
// const Stock = connection.model('Stock', stockSchema);


const stockSchema = new mongoose.Schema({
    symbol: String // RELIANCE, HDFCBANK
});
const Stock = connection.model('Stock', stockSchema);

module.exports = Stock;
