import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  isLoggedIn: false,
  logginHandler: () => undefined,
});
export const CartContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state variable for login status
  function logginHandler() {
    setIsLoggedIn(!isLoggedIn)
  }
  const contextValue = { isLoggedIn, logginHandler };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
