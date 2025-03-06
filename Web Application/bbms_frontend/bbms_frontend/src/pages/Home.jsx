import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaTint, FaSearch, FaMapMarker, FaPhone } from 'react-icons/fa';

const Home = () => {
  const [donors, setDonors] = useState([]);
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDonors = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8081/api/donors/');
      if (!response.ok) throw new Error('Failed to fetch donors');
      const data = await response.json();
      
      // Filter donors based on selected blood type
      const filteredDonors = selectedBloodType 
        ? data.filter(donor => donor.bloodType === selectedBloodType)
        : data;
      
      setDonors(filteredDonors);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Save Lives With Blood Donation</h1>
          <p>Find blood donors instantly or register as a donor</p>
          <div className="search-box">
            <select 
              className="blood-group-select"
              value={selectedBloodType}
              onChange={(e) => setSelectedBloodType(e.target.value)}
            >
              <option value="">All Blood Types</option>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <button 
              className="blood-search-btn"
              onClick={fetchDonors}
            >
              <FaSearch className="icon" />
              Search Donors
            </button>
          </div>
        </div>
      </section>

      {/* Loading and Error States */}
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading donors...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}

      {/* Donors Grid Section */}
      <section className="donors-section">
        <h2>{selectedBloodType ? `${selectedBloodType} Donors` : 'All Donors'}</h2>
        <div className="donors-grid">
          {donors.map((donor) => (
            <div key={donor.id} className="donor-card">
              <div className="donor-header">
                <h3>{donor.name}</h3>
                <div className="blood-type-badge">
                  <FaTint /> {donor.bloodType}
                </div>
              </div>
              <div className="donor-details">
                <p className="donor-info">
                  <FaMapMarker className="icon" />
                  <span>{donor.address}</span>
                </p>
                <p className="donor-info">
                  <FaPhone className="icon" />
                  <span>{donor.contactNo}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {donors.length === 0 && !isLoading && (
          <p className="no-donors">No donors found matching your criteria</p>
        )}
      </section>

      {/* Other Sections (Stats, Process, etc.) can be added here */}
    </div>
  );
};

export default Home;