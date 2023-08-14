import React, { useState, useEffect } from 'react';
// import './LandingPage.css'; // Import your custom styles here
import moment from 'moment-timezone';
import SocialMedia from './socialMedia';
import '../css/footer.css';

const Footer: React.FC = () => {
  return (
    <div className="landing-page">
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:info@ionbahamas.org">info@ionbahamas.org</a></p>
            <p>Phone: <a href="tel:469-294-5834">(469) 294-5834</a></p>
            <p>Mailing Address: 3371 FM 1562, Celeste, TX 75423</p>
          </div>
          <SocialMedia />
          <div className="copyright" style={{paddingTop:'10px'}}>
            <p>&copy; {new Date().getFullYear()} ION Bahamas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
