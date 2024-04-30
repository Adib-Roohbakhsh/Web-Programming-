// import {useContext } from "react";
// import { CartContext } from "./context"; // Import CartContext
import { products } from "./data";

const ShoppingBasket = () => {
  // const { basket, total } = useContext(CartContext); // Use context to access cart and total

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {Object.keys(products).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {Object.entries(products).map(([productId, quantity]) => (
            <div key={productId} className="basket-item">
              <p>{quantity}x {products.find((p) => p.id === +productId).name}</p>
            </div>
          ))}
          <p className="total">Total: ${20}</p>
        </>
      )}
    </div>
  );
};

export default ShoppingBasket;
