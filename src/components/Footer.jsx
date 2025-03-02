import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-4 col-sm-6 col-12 text-sm-left text-center text-md-start">
            {/* Center on small screens, left-align on larger screens */}
            <h5 className='text-sm-start'>Quick Links</h5>
            <ul className="list-unstyled text-sm-start">
              <li><NavLink to="/" className="text-white text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/movies" className="text-white text-decoration-none">Movies</NavLink></li>
              <li><NavLink to="/about" className="text-white text-decoration-none">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-white text-decoration-none">Contact</NavLink></li>
              <li><NavLink to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4 col-sm-6 col-12 text-md-start text-center">
            {/* Center on small screens, left-align on larger screens */}
            <h5 className='text-sm-start'>Follow Us</h5>
            <ul className="list-unstyled text-sm-start">
              <li><NavLink to="https://facebook.com" className="text-white text-decoration-none">Facebook</NavLink></li>
              <li><NavLink to="https://twitter.com" className="text-white text-decoration-none">Twitter</NavLink></li>
              <li><NavLink to="https://instagram.com" className="text-white text-decoration-none">Instagram</NavLink></li>
              <li><NavLink to="https://youtube.com" className="text-white text-decoration-none">YouTube</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4 text-center">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-top">
          <p className="mb-0">&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;