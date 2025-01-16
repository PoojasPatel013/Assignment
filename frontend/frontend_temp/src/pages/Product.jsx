import React, { useEffect, useState } from "react";
import "./Product.css"; // Ensure the CSS file is imported
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/products")
      .then((rawData) => rawData.json())
      .then((res) => setCards(res));
  }, []);

  // // On clicking hello ecommerce home page will be navigaed...
  // const navigate = useNavigate();
  const NavigateToFlipkart = (item) => {
    const baseURL = "https://www.flipkart.com/search?q="; // Flipkart search URL
    const encodedItem = encodeURIComponent(item); // Encode item to make it URL-safe
    const targetURL = `${baseURL}${encodedItem}`;
    window.open(targetURL, "_blank"); // Open the URL in a new tab
  };

  return (
    <div className="product">
      <div className="container">
        <h1>Product List</h1>
        <div className="cards">
          {cards.slice(0, 15).map((card, index) => (
            <div key={index} className="card">
              <img
                src={card.image || "default-image-url.jpg"} // Fallback for missing images
                alt={card.Item}
                style={{
                  maxHeight: "180px",
                  maxWidth: "180px",
                  objectFit: "contain",
                  width: "100%",
                  borderRadius: "50%",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
                  transition: "box-shadow 0.3s ease-in-out", // Smooth transition for hover effects
                }}
                onMouseOver={(e) =>
                  (e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)")
                } // Optional hover effect
                onMouseOut={(e) =>
                  (e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")
                } // Revert shadow on mouse out
                onClick={() => NavigateToFlipkart(card.Item)}
              />

              <div className="card-info">
                <h2>{card.Item}</h2>
                <h4>{card.company}</h4>
                <p>{card.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
