const Trade = require('../models/trade');
const Stock = require('../models/stock');

// Add a new trade
exports.addTrade = async (req, res, next) => {
    const { stockSymbol, type, quantity, price, date } = req.body;
    
    // Find or create the stock
    let stock = await Stock.findOne({ symbol: stockSymbol });
    if (!stock) {
        stock = new Stock({ symbol: stockSymbol });
        await stock.save();
    }

    // Create a new trade
    const newTrade = new Trade({
        stock: stock._id,
        type,
        quantity,
        price,
        date
    });

    await newTrade.save();
    res.json({ success: true, data: newTrade });
};

// Update an existing trade
exports.updateTrade = async (req, res, next) => {
    const { tradeId, stockSymbol, type, quantity, price, date } = req.body;
    
    // Find the stock (or create it if it doesn't exist)
    let stock = await Stock.findOne({ symbol: stockSymbol });
    if (!stock) {
        stock = new Stock({ symbol: stockSymbol });
        await stock.save();
    }

    // Find and update the trade
    const updatedTrade = await Trade.findByIdAndUpdate(tradeId, {
        stock: stock._id,
        type,
        quantity,
        price,
        date
    }, { new: true });

    if (!updatedTrade) {
        return res.status(404).json({ success: false, message: "Trade not found" });
    }

    res.json({ success: true, data: updatedTrade });
};


// Remove a trade
exports.removeTrade = async (req, res, next) => {
    const { tradeId } = req.body;

    // Find and delete the trade
    const deletedTrade = await Trade.findByIdAndDelete(tradeId);

    if (!deletedTrade) {
        return res.status(404).json({ success: false, message: "Trade not found" });
    }

    res.json({ success: true, data: deletedTrade });
};
