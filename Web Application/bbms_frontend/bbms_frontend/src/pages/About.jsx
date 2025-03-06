import React from 'react';
import './About.css';
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaAmbulance } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About LifeBlood</h1>
          <p>Connecting donors with those in need since 2023</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            To create a reliable network of blood donors and recipients, ensuring timely access
            to safe blood supplies while promoting regular voluntary blood donation.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <FaHeartbeat className="stat-icon" />
              <h3>5000+</h3>
              <p>Lives Saved</p>
            </div>
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <h3>3000+</h3>
              <p>Registered Donors</p>
            </div>
            <div className="stat-item">
              <FaAmbulance className="stat-icon" />
              <h3>24/7</h3>
              <p>Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaHandHoldingHeart className="value-icon" />
            <h3>Compassion</h3>
            <p>We prioritize human life above all else, showing empathy in every action</p>
          </div>
          <div className="value-card">
            <FaHeartbeat className="value-icon" />
            <h3>Integrity</h3>
            <p>Maintaining the highest standards of safety and ethical practices</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>Building a network of responsible donors and engaged citizens</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="Team Member" />
            <h3>Dr. Sarah Johnson</h3>
            <p>Medical Director</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Team Member" />
            <h3>Michael Chen</h3>
            <p>Donor Relations</p>
          </div>
          <div className="team-member">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Team Member" />
            <h3>Emma Wilson</h3>
            <p>Community Outreach</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our community of life-savers today</p>
        <button className="cta-button">Become a Donor</button>
      </section>
    </div>
  );
};

export default About;