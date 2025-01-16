import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Logo3 from "../assets/Logo3.png";

// import {Home} from "../pages/Home";
const Header = () => {
  // On clicking hello ecommerce home page will be navigaed...
  const navigate = useNavigate();
  const NavigateHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo" onClick={NavigateHome}><img  className="imageLuxy" src={Logo3} alt="Luxy Globe." />ThreadSync</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
