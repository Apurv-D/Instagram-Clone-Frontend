import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="brand-logo">Instagram</h2>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button className="btn" type="submit" name="action">
          Submit
        </button>
        <br></br>
        <p>Don't have an account? <Link to ="/signup" className="blue-link">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;