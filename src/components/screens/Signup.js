import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button className="btn login-btn" type="submit" name="action">
          Submit
        </button>
        <p>Have an account? <Link to ="/login" className="blue-link">Log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;