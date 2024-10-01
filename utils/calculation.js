// Utility function to aggregate trades and calculate holdings
module.exports.calculateHoldings = (trades) => {
    const holdings = {}; // To store stock symbols and their aggregate data

    trades.forEach(trade => {
        const symbol = trade.stock.symbol; // Assuming stock has a symbol field
        if (trade.type === 'BUY') {
            if (!holdings[symbol]) {
                holdings[symbol] = { totalQty: 0, totalPrice: 0 };
            }
            holdings[symbol].totalQty += trade.quantity;
            holdings[symbol].totalPrice += trade.price * trade.quantity;
        } else if (trade.type === 'SELL') {
            if (holdings[symbol]) {
                holdings[symbol].totalQty -= trade.quantity;
            }
        }
    });

    return Object.keys(holdings).map(symbol => ({
        stock: symbol,
        avgPrice: holdings[symbol].totalPrice / holdings[symbol].totalQty || 0, // Handle division by zero
        quantity: holdings[symbol].totalQty
    }));
};