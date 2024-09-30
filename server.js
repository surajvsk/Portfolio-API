const express = require('express');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolioRoutes');
const tradeRoutes = require('./routes/tradeRoutes');


const app = express();
app.use(bodyParser.json());



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



app.use('/', portfolioRoutes);
app.use('/', tradeRoutes);