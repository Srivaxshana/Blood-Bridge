import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../popup/AdminLoginPopup.css";

const AdminLoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      // Set user role in localStorage
      localStorage.setItem('userRole', 'admin');
      navigate('/admin/dashboard');
      onClose();
    } else {
      setError('Invalid username or password');
    }
  };

  // Rest of the component remains the same
  return (
    <div className="admin-login-overlay">
      <div className="admin-login-popup">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPopup;