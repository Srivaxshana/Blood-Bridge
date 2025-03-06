import React, { useState } from 'react';
import './NavBar.css';
import AdminLoginPopup from "../popup/AdminLoginPopup"; // Make sure to create this component

const NavBar = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text">BloodBank</span>
        </div>
        
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          <button 
            className="admin-login-btn" 
            onClick={() => setShowAdminLogin(true)}
          >
            Admin Login
          </button>
        </div>
      </div>
      
      {showAdminLogin && (
        <AdminLoginPopup 
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </nav>
  );
}

export default NavBar;