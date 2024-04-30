import { useState } from "react";
import "./SignupPage.css";
import Header from "./Header";
import { Link } from "react-router-dom"; 

const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setError] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();

    event.preventDefault();
    // Add login logic here (e.g., validation, API call)
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password ,name}),
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
        
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });

    // Add validation here (e.g., check password length, confirmation match)
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password.");
      return; // Prevent form submission if passwords don't match
    }

    // ... (rest of signup logic here, e.g., API call)
    console.log("name:", name);
    console.log("Username:", username);
    console.log("Password:", password); // Don't log actual password in production
  };

  return (
    <>
      <Header isLogin={false} />
      <div className="signup-container">
        <h1 className="signUp-h1">Sign Up</h1>
        <form className="signUp-form " onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="signUp-input"
              type="text"
              id="name"
              // Add a state variable and update function for name
              value={name} // Initial value (replace with your preference)
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="signUp-lable" htmlFor="username">
              Username:
            </label>
            <input
              className="signUp-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="signUp-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className="signUp-input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="signUp-button" type="submit">
            Sign Up
          </button>
          <p>
            Do you have an account? 
            <Link to="/login">Log in Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
