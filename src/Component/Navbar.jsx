import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import IconsButton from './AboutPage/IconsButton';

function Navbar() {
  // State to manage the sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close the sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeSidebar}>&times;</a>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item active" onClick={closeSidebar}>HOME</Link>
          </li>
          <li>
            <Link to="/service" className="nav-item" onClick={closeSidebar}>SERVICE</Link>
          </li>
          <li>
            <Link to="/project" className="nav-item" onClick={closeSidebar}>PROJECT</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item" onClick={closeSidebar}>CONTACT</Link>
          </li>
          {/* Uncomment if IconsButton is needed */}
          {/* <IconsButton /> */}
        </ul>
      </div>
      
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item active">HOME</Link>
          </li>
          <li>
            <Link to="/service" className="nav-item">SERVICE</Link>
          </li>
          <li>
            <Link to="/project" className="nav-item">PROJECT</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">CONTACT</Link>
          </li>
          {/* Uncomment if IconsButton is needed */}
          {/* <IconsButton /> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
