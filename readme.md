Here’s a **README.md** file template for your Portfolio Tracking API project:

---

# Portfolio Tracking API

This project is a simple **Portfolio Tracking API** built using **Node.js** and **Express.js**. It allows users to manage stock trades (buy/sell) and provides functionality to retrieve portfolio data, calculate holdings, and compute cumulative returns.

## Features

- **Add, Update, and Delete Trades**: You can perform CRUD operations on trades associated with stocks.
- **Retrieve Portfolio**: Get a detailed list of all trades made in the portfolio.
- **Holdings Calculation**: Get the current holdings of the portfolio, showing the quantity and average buying price of each stock.
- **Cumulative Returns**: Calculate and retrieve the cumulative return on the portfolio based on initial investment and simplified final prices.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (using **Mongoose** as ORM)
- **Postman** for testing the API

## Folder Structure

```
📁 PortfolioTrackingAPI
 ┣ 📁 controllers
 ┃ ┣ 📄 portfolioController.js
 ┃ ┣ 📄 tradeController.js
 ┣ 📁 models
 ┃ ┣ 📄 stock.js
 ┃ ┣ 📄 trade.js
 ┣ 📁 routes
 ┃ ┣ 📄 portfolioRoutes.js
 ┃ ┣ 📄 tradeRoutes.js
 ┣ 📄 server.js
 ┣ 📄 package.json
 ┗ 📄 README.md
```

### Controllers
- **portfolioController.js**: Handles the logic for retrieving portfolio, holdings, and returns.
- **tradeController.js**: Handles the logic for adding, updating, and removing trades.

### Routes
- **portfolioRoutes.js**: Routes for portfolio-related operations (e.g., retrieving holdings and calculating returns).
- **tradeRoutes.js**: Routes for trade-related operations (e.g., adding/updating/deleting trades).

## API Endpoints

### Portfolio Routes

1. **GET** `/portfolio`
   - **Description**: Retrieves all trades in the portfolio.
   - **Response**:
     ```json
     {
       "success": true,
       "data": [/* List of trades */]
     }
     ```

2. **GET** `/holdings`
   - **Description**: Gets the current holdings of the portfolio (aggregated view).
   - **Response**:
     ```json
     {
       "success": true,
       "data": [
         {
           "stock": "RELIANCE",
           "avgPrice": 875.5,
           "quantity": 150
         },
         // other stocks...
       ]
     }
     ```

3. **GET** `/returns`
   - **Description**: Calculates cumulative returns based on initial and final prices.
   - **Response**:
     ```json
     {
       "success": true,
       "data": cumulativeReturnValue
     }
     ```

### Trade Routes

1. **POST** `/addTrade`
   - **Description**: Adds a new trade (buy/sell) to the portfolio.
   - **Request Body**:
     ```json
     {
       "stockSymbol": "RELIANCE",
       "type": "BUY",
       "quantity": 100,
       "price": 900,
       "date": "2015-04-10"
     }
     ```

2. **POST** `/updateTrade`
   - **Description**: Updates an existing trade in the portfolio.
   - **Request Body**:
     ```json
     {
       "tradeId": "64f5cabc1234567890abcdef",
       "stockSymbol": "RELIANCE",
       "type": "SELL",
       "quantity": 50,
       "price": 1000,
       "date": "2015-05-10"
     }
     ```

3. **POST** `/removeTrade`
   - **Description**: Removes an existing trade from the portfolio.
   - **Request Body**:
     ```json
     {
       "tradeId": "64f5cabc1234567890abcdef"
     }
     ```

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** installed or using a cloud MongoDB service (e.g., MongoDB Atlas).

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/PortfolioTrackingAPI.git
   cd PortfolioTrackingAPI
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Setup your MongoDB connection in `server.js`:
   ```js
   mongoose.connect('mongodb://localhost:27017/portfolio', {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
   ```

4. Run the server:
   ```bash
   npm start
   ```

5. Use **Postman** to test the API with the provided endpoints.

## Sample JSON for Testing

- **Add Trade (POST)** `/addTrade`:
  ```json
  {
    "stockSymbol": "HDFCBANK",
    "type": "BUY",
    "quantity": 200,
    "price": 1000,
    "date": "2015-05-11"
  }
  ```

- **Update Trade (POST)** `/updateTrade`:
  ```json
  {
    "tradeId": "64f5cabc1234567890abcdef",
    "stockSymbol": "HDFCBANK",
    "type": "SELL",
    "quantity": 100,
    "price": 800,
    "date": "2015-07-12"
  }
  ```

- **Remove Trade (POST)** `/removeTrade`:
  ```json
  {
    "tradeId": "64f5cabc1234567890abcdef"
  }
  ```

## Design Decisions

1. **Modular Code**: Controllers and routes are kept separate to ensure the codebase is clean and easy to maintain.
2. **Database**: MongoDB is used with Mongoose ORM to handle asynchronous data storage and retrieval.
3. **Simplicity in Return Calculation**: The final stock price is hardcoded to `100` as per the assignment specification, but this can easily be modified to fetch real-time prices in a more complex implementation.

## Possible Improvements

- **Real-time Stock Prices**: Integrate an API like Yahoo Finance to fetch real-time stock prices.
- **User Authentication**: Implement user authentication and authorization for managing multiple users and portfolios.
- **Pagination**: Add pagination to the `GET /portfolio` route to handle large numbers of trades efficiently.
- **Data Validation**: Use validation libraries (like `Joi`) to ensure that the request body contains valid data.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

By following this guide, you can easily run and test the Portfolio Tracking API.