import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ShoppingBasketPage from "./pages/ShoppingBasket";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Product";
import { CartContextProvider } from "./store/context";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "ShoppingBasket", element: <ShoppingBasketPage /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
    <div className="App">
      <RouterProvider router={router}  />
    </div>
    </CartContextProvider>
  );
}

export default App;
