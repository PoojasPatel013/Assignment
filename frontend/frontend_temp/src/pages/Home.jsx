import { useEffect, useState } from "react";
import "./Home.css";
import Products from "./Product.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);

  // This content whill show working of shop me button...
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("Products");
  };

  useEffect(() => {
    // Mock data, replace with real API call
    const mockData = [
      {
        image:
          "https://imgs.search.brave.com/x8ZbhVxcN1o90JTDQXif0PUmhc7rgDQnJ51bEylujH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXdlYXJ0c2hpcnRz/LmNvbS9jZG4vc2hv/cC9maWxlcy9Ib21l/cGFnZWdyYXBoaWMu/anBnP3Y9MTY3ODc4/ODUwNiZ3aWR0aD0x/NDIw",
        title: "T-shirt",
        description: "A comfortable cotton t-shirt for everyday wear.",
      },
      {
        image:
          "https://imgs.search.brave.com/QtT_2i6kCJbKnYWnG9VgsKA4noC_mqBcKyb50wk3GC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/Njk1NzIxL3Bob3Rv/L2hlYXAtb2YtamVh/bnMtYmVmb3JlLWxh/dW5kcnkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXFPQ2RN/NTRKVFVzT3NRLWRR/aEI5Z3dNUnJBZUFB/dk4yZTYxam4tSWtL/UVU9",
        title: "Jeans",
        description: "Stylish and durable jeans that fit every occasion.",
      },
      {
        image:
          "https://imgs.search.brave.com/ZRDO60WIu8UpHcgC_IdU96Vx2HJ0G0RHN6BiwPFifH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MDM2NjA0Mi9waG90/by9wYWRkZWQtamFj/a2V0LWlzb2xhdGVk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1LR2I1cElfeVNp/dEdEb1hLblNoemI1/N1NGakJXb3NPTVJN/c3V6VklxMm9BPQ",
        title: "Jacket",
        description: "A warm jacket perfect for cold weather.",
      },
    ];

    setCards(mockData);
  }, []);

  return (
    <div className="home">
      <div className="container welcomeSection">
        <h1>Welcome to Our Website</h1>
        <p>Explore our products and find the best deals for you.</p>
        <p>Visit the Product page to see the latest items.</p>
      </div>

      <div className="cta-section">
        <h2>Don't Miss Out!</h2>
        <p>Shop now and get exclusive discounts on your first purchase.</p>
        <button className="cta-button" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>

      <div className="testimonial-section">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "The quality of the products exceeded my expectations! I will
              definitely be shopping here again."
            </p>
            <span>- Sarah K.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Fantastic service and fast shipping! I couldn't be happier with
              my purchase."
            </p>
            <span>- Michael T.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "A truly seamless shopping experience. The staff is friendly, and
              the products are amazing!"
            </p>
            <span>- Jessica L.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "I found exactly what I was looking for! Great variety and amazing
              customer service."
            </p>
            <span>- David P.</span>
          </div>
        </div>
      </div>

      <div className="jeanWaalaSection">
        <h2>Most Selling Products</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} onClick={handleShopNow} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          We are passionate about providing the best clothing options at
          affordable prices. Our mission is to make fashion accessible to
          everyone while ensuring comfort and style. Browse through our wide
          range of products and find the perfect fit for you!
        </p>
      </div>
    </div>
  );
};

export default Home;
