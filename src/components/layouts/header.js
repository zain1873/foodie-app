import React from 'react';
import "../../styles/header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg p-3">
      <Link to="/" className="navbar-brand d-flex align-items-center p-0">
        <i className="fa-solid fa-utensils me-3"></i>
        <h1 className="m-0">Restoran</h1>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/service" className="nav-item nav-link">Service</Link>
          <Link to="/menu" className="nav-item nav-link">Menu</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <div className="dropdown-menu m-0">
              <Link to="/our-team" className="dropdown-item">Our Team</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link me-2">Contact</Link>
          {/* <Link to="/booking" className="btn order_now py-2 px-4">Book A Table</Link> */}

          {/* Sign Up and Login Buttons */}
          <Link to="/signup" className="btn btn-outline-primary py-2 px-4 ms-2">Sign Up</Link>
          <Link to="/login" className="btn btn-outline-secondary py-2 px-4 ms-2">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
