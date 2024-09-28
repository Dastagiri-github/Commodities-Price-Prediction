import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './PredictDashboard.css'; 
import img1 from '../../assets/imgp1.jpg';
import img2 from '../../assets/imgp2.jpg';
import img3 from '../../assets/imgp3.jpg';
import img4 from '../../assets/imgp4.jpg';
import img5 from '../../assets/imgp5.jpg';
import img6 from '../../assets/imgp6.jpeg';
import img7 from '../../assets/imgp7.jpeg';
import img8 from '../../assets/imgp8.jpg';
// Register Chart.js components
Chart.register(...registerables);

const PredictDashboard = () => {
  const chartRef = useRef(null); // Reference for the chart canvas

  useEffect(() => {
    // Generate random weather data
    function generateRandomWeatherData() {
      return {
        temperature: `${(Math.random() * 15 + 15).toFixed(1)}°C`,
        humidity: `${(Math.random() * 30 + 50).toFixed(1)}%`,
        weather: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
        season: ['Winter', 'Spring', 'Summer', 'Fall'][Math.floor(Math.random() * 4)],
        volatility: `${(Math.random() * 5).toFixed(2)}%`,
        crop: ['Sowing', 'Growing', 'Harvesting'][Math.floor(Math.random() * 3)],
        seasonal: ['Stable', 'Fluctuating'][Math.floor(Math.random() * 2)],
        buffer: `${Math.floor(Math.random() * 5000)} units`,
      };
    }

    // Populate weather data
    const data = generateRandomWeatherData();
    document.getElementById('temp-status').textContent = data.temperature;
    document.getElementById('humidity-status').textContent = data.humidity;
    document.getElementById('weather-status').textContent = data.weather;
    document.getElementById('season-status').textContent = data.season;
    document.getElementById('volatility-status').textContent = data.volatility;
    document.getElementById('crop-status').textContent = data.crop;
    document.getElementById('seasonal-status').textContent = data.seasonal;
    document.getElementById('buffer-status').textContent = data.buffer;

    // Generate price data for the chart
    const minPrice = 80;
    const maxPrice = 90;
    let previousPrice = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
    const historicalData = [];

    for (let i = 0; i < 30; i++) {
      const change = (Math.random() * 2 - 1).toFixed(2);
      const newPrice = Math.max(
        minPrice,
        Math.min(maxPrice, (parseFloat(previousPrice) + parseFloat(change)).toFixed(2))
      );
      previousPrice = newPrice;
      historicalData.push(newPrice);
    }

    const lastDayPrice = historicalData[historicalData.length - 1];
    const predictedPrice = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
    const priceDifference = (predictedPrice - lastDayPrice).toFixed(2);

    // Update table values
    document.getElementById('last-day-price').textContent = `₹${lastDayPrice}`;
    document.getElementById('predicted-price-table').textContent = `₹${predictedPrice}`;
    document.getElementById('price-difference').textContent = `₹${priceDifference}`;

    // Render chart only if the ref exists
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: [...Array(30).keys()].map((day) => `Day ${day + 1}`),
          datasets: [
            {
              label: 'Price (₹)',
              data: historicalData,
              borderColor: '#ff6f43',
              fill: false,
              tension: 0.1,
              pointRadius: 3,
              pointBackgroundColor: '#ff6f43',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }

    // Update stock and volatility
    document.getElementById('stock-available').textContent = `${Math.floor(
      Math.random() * 5000
    )} units`;
    document.getElementById('volatility-table').textContent = `${(Math.random() * 5).toFixed(2)}%`;
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <h1>Price Prediction</h1>
        
      </div>

      <div className="cards">
        {[
          { title: 'Temperature', id: 'temp-status', img: img1 },
          { title: 'Humidity', id: 'humidity-status', img: img2  },
          { title: 'Weather Conditions', id: 'weather-status', img: img3 },
          { title: 'Season', id: 'season-status', img: img4 },
          { title: 'Volatility', id: 'volatility-status', img: img5},
          { title: 'Crop Sowing', id: 'crop-status', img: img6 },
          { title: 'Seasonal Changes', id: 'seasonal-status', img: img7 },
          { title: 'Buffer Stock', id: 'buffer-status', img: img8 },
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p id={card.id}>Fetching...</p>
          </div>
        ))}
      </div>

      <div className="prediction">
        <p id="predicted-price">Predicted Price:<span> ₹87.25</span></p>
      </div>

      <div className="content-area">
        <div className="chart-section">
          <canvas ref={chartRef} id="priceChart"></canvas>
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

export default PredictDashboard;
