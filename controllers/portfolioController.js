const Trade = require('../models/trade');
const Stock = require('../models/stock');

// Retrieve the entire portfolio with trades
exports.getPortfolio = async (req, res) => {
    try {
        const trades = await Trade.find().populate('stock');
        res.json({ success: true, data: trades });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get holdings (aggregate view)
exports.getHoldings = async (req, res) => {
    try {
        const trades = await Trade.find().populate('stock');
        const holdings = {}; // To store stock symbols and their average buying price

        trades.forEach(trade => {
            const symbol = trade.stock.symbol;
            if (trade.type === 'BUY') {
                if (!holdings[symbol]) {
                    holdings[symbol] = { totalQty: 0, totalPrice: 0 };
                }
                holdings[symbol].totalQty += trade.quantity;
                holdings[symbol].totalPrice += trade.price * trade.quantity;
            } else if (trade.type === 'SELL') {
                holdings[symbol].totalQty -= trade.quantity;
            }
        });

        const result = Object.keys(holdings).map(symbol => ({
            stock: symbol,
            avgPrice: holdings[symbol].totalPrice / holdings[symbol].totalQty,
            quantity: holdings[symbol].totalQty
        }));

        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Calculate cumulative returns
exports.getReturns = async (req, res) => {
    try {
        const trades = await Trade.find().populate('stock');
        const holdings = {};
        let returns = 0;

        trades.forEach(trade => {
            const symbol = trade.stock.symbol;
            if (trade.type === 'BUY') {
                if (!holdings[symbol]) {
                    holdings[symbol] = { totalQty: 0, totalPrice: 0 };
                }
                holdings[symbol].totalQty += trade.quantity;
                holdings[symbol].totalPrice += trade.price * trade.quantity;
            } else if (trade.type === 'SELL') {
                holdings[symbol].totalQty -= trade.quantity;
            }
        });

        for (const symbol in holdings) {
            const holding = holdings[symbol];
            const finalPrice = 100; // Simplified for the assignment
            const initialInvestment = holding.totalPrice;
            const currentValue = holding.totalQty * finalPrice;
            returns += (currentValue - initialInvestment);
        }

        res.json({ success: true, data: returns });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
