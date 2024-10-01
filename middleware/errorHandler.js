// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      success: false,
      message: message,
      // Optionally include more details for debugging in development environments
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  };
  
module.exports = errorHandler;  