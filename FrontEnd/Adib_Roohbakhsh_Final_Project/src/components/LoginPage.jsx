import { useState ,useContext} from "react";
import "./LoginPage.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/context";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();
  const {logginHandler }= useContext(CartContext) 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here (e.g., validation, API call)
    fetch(`http://localhost:3000/users/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Failed to log in");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        if (data.length > 0) {
          logginHandler()
          navigate("/");
        }else
        setError("username or password is wrong")
      })
      .catch((error) => {
        setError(error.message);
      });

    // console.log("Username:", username);
    // console.log("Password:", password);
  };

  
  return (
    <>
      <Header isLogin={false} />
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => {setUsername(e.target.value)
                setError(undefined)}
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)
               setError(undefined)}
            }
              required
            />
          </div>
          <input disabled id="login-error" type="text" value={error} />
          <button className="login-button" type="submit">
            Login
          </button>
          <p>
            Do not have an account?
            {/* <a href="" > Sign Up Here</a> */}
            <Link to="/signup">Sign Up Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
