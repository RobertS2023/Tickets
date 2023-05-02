import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Tickets() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRedirectToHome = () => {
    setRedirectToHome(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isSignUp) {
        // Implement signup functionality here
        console.log("Signed up successfully");
      } else {
        // Implement login functionality here
        console.log("Logged in successfully");
      }
      handleRedirectToHome();
    } catch (error) {
      setError(error.message);
    }
  };

  //   if (redirectToHome) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <section className="form-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-primary">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <p className="ticket-text">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button
          className="btn-secondary"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </section>
  );
}

export default Tickets;
