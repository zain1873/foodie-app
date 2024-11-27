import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/footer.css";  

function Footer() {
  return (
    <footer className="footer container-fluid bg-dark text-light footer pt-5 mt-5" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/booking">Reservation</Link>
            <Link className="btn btn-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="btn btn-link" to="/terms">Terms &amp; Condition</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
            <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3 text-white"></i>123 Street, New York, USA</p>
            <a href="tel:+01234567890" className="mb-2 text-white">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </a>
            <a href="mailto:info@example.com" className="text-white mt-2 d-flex align-items-center">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </a>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn order_now btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/help">Help</Link>
                <Link to="/faq">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
