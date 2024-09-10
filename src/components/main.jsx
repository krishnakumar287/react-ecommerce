import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css"; 

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleShopNowClick = () => {
    navigate('/product'); // Navigate to the products page
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="overlay"></div>
        <img
          className="hero-image"
          src="./assets/main.png.jpg"
          alt="Hero"
        />
        <div className="text-content">
          <h1 className="title">Discover the Latest Trends</h1>
          <p className="subtitle">
            Step into the new season with our exclusive collections that blend style with comfort.
          </p>
          <button className="shop-button" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
