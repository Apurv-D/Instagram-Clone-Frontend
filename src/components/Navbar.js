import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/">Log out</Link></li>
            </ul>
            </div>
        </nav>
    )

}

export default Navbar;
