const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolioAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => console.log(err));
