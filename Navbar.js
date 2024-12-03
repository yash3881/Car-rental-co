import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <i className="bx bxs-car"></i>
        <span> Car Rental Co.</span>
      </div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#ride">Rides</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#newsletter">Contact Us</a></li>
      </ul>
      <div className="header-btn">
        <a href="login.html" className="sign-in-log-in">Sign Up / Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
