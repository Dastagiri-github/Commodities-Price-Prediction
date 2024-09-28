import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/predictdashboard'); // Correct route to navigate to PredictDashboard
  };

  return (
    <StyledWrapper>
      <button onClick={handleButtonClick}>Predict</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    border: none;
    width: 70px;
    height: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(30deg, #80868d, #4ce3f7);
    border-radius: 20px;
    background-size: 100% auto;
    font-family: inherit;
    font-size: 17px;
    padding: 0.6em 1.5em;
  }

  button:hover {
    background-position: right center;
    background-size: 200% auto;
    animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #05bada66;
    }
    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }
    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`;

export default Button;
