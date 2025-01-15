import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import {Home} from "../pages/Home";
const Header = () => {
  // On clicking hello ecommerce home page will be navigaed...
  // const navigate = useNavigate();
  // const navigateToHome = () => {
  //   navigate(Home);
  // };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">hElLo EcOmMeRcE</div>
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
