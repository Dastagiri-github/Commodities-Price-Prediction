import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Button from './Button.jsx';
import imgmain from "../../assets/imgmain.jpeg"; // Adjust according to your structure


const Header = () => {
  const navigate = useNavigate();

  const handlePredictPrices = () => {
    navigate('/predict');
  };

  return (
    <div className='header'>
      <img src={imgmain} alt="Header Background" className="header-image" />
      <div className="header-contents">
        <h2 className="bordered-text">Predict the Prices of Commodities</h2>
        <Button onClick={handlePredictPrices} /> {/* Pass the handler as a prop */}
      </div>
    </div>
  );
};

export default Header;
