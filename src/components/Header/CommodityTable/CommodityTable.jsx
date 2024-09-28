// src/components/CommodityTable/CommodityTable.jsx

import React from 'react';
import './CommodityTable.css';

const CommodityTable = () => {
    const commodities = [
        { name: 'Gram', historicalPrice: '₹85.6', predictedPrice: '₹87.1', priceDifference: '₹1.5', volatility: '0.75%' },
        { name: 'Tur', historicalPrice: '₹167.0', predictedPrice: '₹164.2', priceDifference: '₹-2.8', volatility: '-2%' },
        { name: 'Urad', historicalPrice: '₹126.4', predictedPrice: '₹124.4', priceDifference: '₹-2', volatility: '-2%' },
        { name: 'Moong', historicalPrice: '₹113.25', predictedPrice: '₹115.65', priceDifference: '₹2.4', volatility: '1.5%' },
        { name: 'Masur', historicalPrice: '₹91.6', predictedPrice: '₹89.4', priceDifference: '₹-2.2', volatility: '-2%' },
        { name: 'Rice', historicalPrice: '₹45.5', predictedPrice: '₹43.5', priceDifference: '₹2', volatility: '2%' },
        { name: 'Wheat', historicalPrice: '₹28.8', predictedPrice: '₹30.8', priceDifference: '₹2', volatility: '3%' },
        { name: 'Sugar', historicalPrice: '₹43.5', predictedPrice: '₹44.7', priceDifference: '₹1.2', volatility: '1%' },
        { name: 'Onion', historicalPrice: '₹49.3', predictedPrice: '₹47.3', priceDifference: '₹-2', volatility: '-2%' },
        { name: 'Potato', historicalPrice: '₹35.6', predictedPrice: '₹36.64', priceDifference: '₹1', volatility: '1.5%' },
        { name: 'Tomato', historicalPrice: '₹43.5', predictedPrice: '₹44.3', priceDifference: '₹0.8', volatility: '1%' },
        { name: 'Milk', historicalPrice: '₹56.7', predictedPrice: '₹58.72', priceDifference: '₹2', volatility: '1.5%' },
        { name: 'Eggs', historicalPrice: '₹135.78', predictedPrice: '₹137.7', priceDifference: '₹2', volatility: '1.6%' },
        { name: 'Chicken', historicalPrice: '₹136.75', predictedPrice: '₹134.75', priceDifference: '₹-2', volatility: '1%' },
        { name: 'Banana', historicalPrice: '₹47.9', predictedPrice: '₹49.3', priceDifference: '₹1.4', volatility: '1.2%' },
        { name: 'Tea', historicalPrice: '₹265.9', predictedPrice: '₹267.3', priceDifference: '₹2.4', volatility: '0.4%' },
        { name: 'Coffee', historicalPrice: '₹852.52', predictedPrice: '₹847.98', priceDifference: '₹2.46', volatility: '0.7%' },
        { name: 'Oil', historicalPrice: '₹118.5', predictedPrice: '₹120.0', priceDifference: '₹-1.5', volatility: '-0.8%' },
        { name: 'Salt', historicalPrice: '₹12.5', predictedPrice: '₹12.45', priceDifference: '₹0.05', volatility: '0.1%' },
        { name: 'Fish', historicalPrice: '₹235.5', predictedPrice: '₹230.75', priceDifference: '₹5.25', volatility: '1.5%' },
        { name: 'Meat', historicalPrice: '₹345.9', predictedPrice: '₹340.5', priceDifference: '₹4.4', volatility: '-2%' },
        { name: 'Pulses', historicalPrice: '₹49.6', predictedPrice: '₹150.6', priceDifference: '₹1', volatility: '0.5%' },
    ];

    const predict = (commodity) => {
        alert("Predicting prices for " + commodity);
    };

    return (
        <div className="center-table">
            <table>
                <thead>
                    <tr>
                        <th>Commodities</th>
                        <th>Historical Price (₹)</th>
                        <th>Predicted Price (₹)</th>
                        <th>Price Difference (₹)</th>
                        <th>Volatility (%)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {commodities.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.historicalPrice}</td>
                            <td>{item.predictedPrice}</td>
                            <td>{item.priceDifference}</td>
                            <td>{item.volatility}</td>
                            <td><button onClick={() => predict(item.name)}>Predict</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CommodityTable;
