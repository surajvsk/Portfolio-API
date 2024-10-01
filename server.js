
const express = require('express');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolioRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;




app.use('/portfolio', portfolioRoutes);
app.use('/portfolio', tradeRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});