// src/components/FoodItem.jsx
import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import Button from './Button.jsx';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FoodItem = ({ id, name, description, image, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    // Navigate to the PredictDashboard component
    navigate('/predictdashboard'); // Make sure this matches your route
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <Button onClick={handleButtonClick} /> {/* Pass the handler */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="today-price inline">Today's Price:&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="food-item-price inline">
          &#8377;{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
