const mongoose = require('mongoose');
require('dotenv').config()

// Define connection URI (update to your MongoDB URI)
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hfrds.mongodb.net/portfolioAPI?retryWrites=true&w=majority&appName=Cluster0`;


// Connection options (including maxPoolSize for connection pooling)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Set the pool size (number of connections in the pool)
  serverSelectionTimeoutMS: 5000 // Timeout for connection retry
};

// Create and export the connection pool
const connection = mongoose.createConnection(dbURI, options);

// Event listeners for connection pool management
connection.on('connected', () => {
  console.log('Mongoose connection pool established.');
});

connection.on('error', (err) => {
  console.log('Mongoose connection pool error: ', err);
});

connection.on('disconnected', () => {
  console.log('Mongoose connection pool disconnected.');
});

module.exports = connection;
