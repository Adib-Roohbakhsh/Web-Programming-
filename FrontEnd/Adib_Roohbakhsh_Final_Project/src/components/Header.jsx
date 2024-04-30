import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../store/context";
const Header = ({ onAddToBasket}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {isLoggedIn} = useContext(CartContext) 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Implement dropdown logic for categories here (optional)

  return (
    <header className={`header ${isLoggedIn? "spaceBetween" : "justifyCenter"}`}>
      {isLoggedIn && <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>}
      <div className="shop-name">
        <h1>My Online Shop</h1>
      </div>
      {isLoggedIn && <div className="categories-dropdown">
        {/* Replace with dropdown component or logic (optional) */}
        <select>
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
        </select>
        {!isLoggedIn && <button className="Basket-button" onClick={onAddToBasket}>My Basket</button>}
        {isLoggedIn && <Link to={"Login"}><button className="Login-button"> Log in </button></Link>}
      </div>}
    </header>
  );
};

export default Header;
