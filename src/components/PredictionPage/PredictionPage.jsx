import React, { useEffect } from 'react';
// import './PredictionPage.css'; // You can include the styles from your HTML code

const PredictionPage = () => {
  useEffect(() => {
    // Your previous script logic to fetch data and generate the chart
    const generateRandomWeatherData = () => {
      // Add your random data generation logic here
    };

    // Call the function to generate and display data
    generateRandomWeatherData();
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <h1>Price Prediction</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>

      <div className="cards">
        {/* Include your cards and data here */}
      </div>

      <div className="prediction">
        <p id="predicted-price">Predicted Price: ₹87.25</p>
      </div>

      <div className="content-area">
        <div className="chart-section">
          <canvas id="priceChart"></canvas>
        </div>

        <div className="details-section">
          <table className="details-table">
            <thead>
              <tr>
                <th>Detail</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stock Available</td>
                <td id="stock-available">Loading...</td>
              </tr>
              <tr>
                <td>Volatility</td>
                <td id="volatility-table">Loading...</td>
              </tr>
              <tr>
                <td>Last Day Price</td>
                <td id="last-day-price">Loading...</td>
              </tr>
              <tr>
                <td>Predicted Price</td>
                <td id="predicted-price-table">Loading...</td>
              </tr>
              <tr>
                <td>Price Difference</td>
                <td id="price-difference">Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
