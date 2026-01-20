import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">BillEazzy</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to BillEazzy</h1>
            <p className="hero-subtitle">Simplify Your Billing and Invoicing</p>
            <p className="hero-description">
              BillEazzy makes managing your invoices and billing processes effortless. 
              Streamline your business operations with our intuitive billing solution.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Why Choose BillEazzy?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Easy Management</h3>
                <p className="feature-description">
                  Manage all your invoices and bills in one place with an intuitive interface.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Fast Processing</h3>
                <p className="feature-description">
                  Generate invoices quickly and efficiently, saving you time and effort.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">Secure & Reliable</h3>
                <p className="feature-description">
                  Your data is protected with industry-standard security measures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Join thousands of businesses using BillEazzy to streamline their billing processes.
            </p>
            <button className="btn btn-primary btn-large">Start Free Trial</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">BillEazzy</h4>
              <p className="footer-text">Making billing easy for businesses everywhere.</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <p className="footer-text">Email: info@billeazzy.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BillEazzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
