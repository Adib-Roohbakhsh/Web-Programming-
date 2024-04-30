import { createContext, useState, useEffect } from "react";
// import Carousel from './Carousel'; // Assuming you have a separate Carousel component
import { products } from "./data";
import Product from "./Product";
import "./HomePage.css";
import Header from "./Header";
const BasketContext = createContext();

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching featured products (replace with actual logic)
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3);
    setFeaturedProducts(randomProducts);
  }, []);

  const [basket, setBasket] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total price based on basket items
    const newTotal = Object.values(basket).reduce(
      (acc, curr) => acc + products.find((p) => p.id === curr).price * curr,
      0
    );
    setTotal(newTotal);
  }, [basket]); // Update total on basket change

  const addToBasket = (productId) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      [productId]: (prevBasket[productId] || 0) + 1,
    }));
  };

  return (
    <div className="home-container">
      <BasketContext.Provider value={{ basket, total }}>
        <Header isLogin={true} />
        <div className="banner">
          <h1>Welcome to Your Online Shopping Destination!</h1>
          <p>Find all your favorite products at amazing prices.</p>
        </div>
        {/* Carousel section (optional) */}
        {/* <Carousel /> */}

        <div className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </div>
      </BasketContext.Provider>
    </div>
  );
};

export default HomePage;
