import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">BillEazzy</Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/privacy-policy" className="nav-link active">Privacy Policy</Link>
          </div>
        </div>
      </nav>

      <main className="privacy-content">
        <div className="container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="privacy-section">
            <h2 className="section-heading">1. Introduction</h2>
            <p>
              Welcome to BillEazzy. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              billing and invoicing services.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment information.</li>
              <li><strong>Business Information:</strong> Company name, business address, tax identification numbers, and other business-related details.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our service, including IP address, browser type, and device information.</li>
              <li><strong>Invoice Data:</strong> Details about invoices, transactions, and billing history.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our billing and invoicing services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              only in the following circumstances:
            </p>
            <ul>
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate or incomplete data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict or object to processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">7. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our service and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">8. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in 
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">9. Children's Privacy</h2>
            <p>
              Our service is not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you become aware that a child has provided us with personal information, 
              please contact us immediately.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-heading">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@billeazzy.com</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
            </div>
          </section>

          <div className="back-link">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
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

export default PrivacyPolicy;
