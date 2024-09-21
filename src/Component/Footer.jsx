import React from 'react';
import './Footer.css'; // Import the external CSS file
import img from './Assets/Wp.png';
import img1 from './Assets/Fb.webp';
import img2 from './Assets/Linkdin.png'
import img3 from './Assets/Git.png'

function Footer() {
  return (
    <div className="footer-container">
      
      <div className="footer-bottom">
        <h3>Designed and Developed by Rohit</h3>
        <p>&copy; 2024</p>
        <h3>Find me on Social icons</h3>
        <div className="social-icons-bottom">
          <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={img} alt="WhatsApp" />
          </a>
          <a href="https://facebook.com/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={img1} alt="Facebook" />
          </a>
          <a href="https://shorturl.at/FbfMJ" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={img2} alt="LinkedIn" />
          </a>
          <a href="https://github.com/rohitnavratna1457/Major_project.git" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={img3} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
