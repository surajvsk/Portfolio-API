// Wrap asynchronous route handlers to catch errors and pass them to errorHandler
const asyncHandler = (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };
  
module.exports = asyncHandler;
  